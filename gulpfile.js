// modified from generator-jekyllized 1.0.0-rc.6
'use strict';
var gulp       = require('gulp');
var requireDir = require('require-dir');
var tasks      = requireDir('./gulp/tasks', {recurse: true}); // eslint-disable-line

// include paths file
var paths      = require('./gulp/paths');


// 'gulp build:site' -- copies, builds, and then copies it again
gulp.task('build:site', gulp.series('site'));

// 'gulp assets' -- removes assets and rebuilds them
// 'gulp assets --prod' -- same as above but with production settings
gulp.task('assets', gulp.series('styles'));

// 'gulp build' -- same as 'gulp' but doesn't serve site
// 'gulp build --prod' -- same as above but with production settings
gulp.task('build', gulp.series('assets', 'build:site'));

// 'gulp check' -- checks your Jekyll site for errors
gulp.task('check', gulp.series('site:check'));

// 'gulp' -- removes assets and gzipped files, creates assets and injects
// them into includes or layouts, builds site, serves site
// 'gulp --prod' -- same as above but with production settings
gulp.task('default', gulp.series('build', 'serve'));
