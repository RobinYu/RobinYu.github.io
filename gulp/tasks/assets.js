var gulp = require('gulp');
browserSync = require('browser-sync');
sass = require('gulp-sass');
argv = require('yargs').argv;
shell = require('shelljs');


// include paths file
var paths        = require('../paths');



// scss编译后的css将注入到浏览器里实现更新
  gulp.task('styles', () =>
    gulp.src(paths.sassFiles + '/**/*.scss')
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
  gulp.watch(paths.sassFilesGlob, gulp.series('styles'));
});
