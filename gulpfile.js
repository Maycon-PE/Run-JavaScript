const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('default', () => {
  gulp.src('scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('index2.css'))
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(gulp.dest('./src/css'))
})
