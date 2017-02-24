var gulp = require('gulp');
browserSync = require('browser-sync');
sass = require('gulp-sass');
cp = require('child_process');
argv = require('yargs').argv;
shell = require('shelljs');

var base_path = './',
  src = base_path + '_sass',
  dist = base_path + 'assets',
  paths = {
    js: src + '/js/*.js',
    scss: [
      src + '/*.scss',
      src + '/**/* .scss',
      src + '/**/**/*.scss',
      src + '/**/**/**/*.scss',
      src + '/**/**/**/**/*.scss',
      src + '/**/**/**/**/**/*.scss'
    ],
    jekyll: [
      'index.html',
      '_posts/*',
      '_layouts/*',
      '_includes/*',
      'assets/*',
      'assets/**/*'
    ]
  };
// 静态服务器 + 监听 scss/html 文件
gulp.task('browser-sync', [
  'sass', 'build-jekyll'
], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
  return gulp.src(paths.scss).pipe(sass()).pipe(gulp.dest("css")).pipe(browserSync.reload({stream: true}));
});

// build Jekyll
gulp.task('build-jekyll', function(done) {
  if (!argv.prod) {
    shell.exec('bundle exec jekyll build --config _config.yml,_config.dev.yml');
    done();
  } else if (argv.prod) {
    shell.exec('bundle exec jekyll build');
    done();
  }
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['build-jekyll'], function() {
  browserSync.reload();
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.jekyll, ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
