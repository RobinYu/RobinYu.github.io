var gulp = require('gulp');
browserSync = require('browser-sync');
sass = require('gulp-sass');
cp = require('child_process');
argv = require('yargs').argv;
shell = require('shelljs');


// include paths file
var paths        = require('../paths');

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
  gulp.task('styles', () =>
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


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', (done) => {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
  done();

  // watch various files for changes and do the needful
  gulp.watch(paths.scss, gulp.series('styles'));
  gulp.watch(paths.jekyll, gulp.series('build:site', reload));
});
