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

// scss编译后的css将注入到浏览器里实现更新
  gulp.task('sass', () =>
    gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.reload({stream: true}))
  );

  // function to properly reload your browser
  function reload(done) {
    browserSync.reload();
    done();
  }

  // build Jekyll
gulp.task('build-jekyll', done => {
    if (!argv.prod) {
      shell.exec('bundle exec jekyll build --config _config.yml,_config.dev.yml');
      done();
    } else if (argv.prod) {
      shell.exec('bundle exec jekyll build');
      done();
    }
  });

// 静态服务器 + 监听 scss/html 文件
gulp.task('browser-sync', gulp.series(gulp.parallel('sass', 'build-jekyll'), (done) => {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
  done();

  // watch various files for changes and do the needful
  gulp.watch(paths.scss, gulp.series('sass'));
  gulp.watch(paths.jekyll, gulp.series('build-jekyll', reload));
}));


gulp.task('default', gulp.parallel('browser-sync', 'watch'));
