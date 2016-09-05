'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('cssmin', function () {
  return gulp.src('assets/css/style.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function () {
  gulp.watch('assets/css/**/*.scss', ['sass', 'cssmin']);
});
