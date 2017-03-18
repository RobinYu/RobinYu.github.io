// modified from generator-jekyllized 1.0.0-rc.6
'use strict';
var gulp       = require('gulp');
var requireDir = require('require-dir');
var tasks      = requireDir('./gulp/tasks', {recurse: true}); // eslint-disable-line

// 'gulp' -- removes assets and gzipped files, creates assets and injects
// them into includes or layouts, builds site, serves site
// 'gulp --prod' -- same as above but with production settings
gulp.task('default', gulp.series('build-jekyll', 'browser-sync'));
