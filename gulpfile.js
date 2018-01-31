var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('util');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var notify = require('gulp-notify');

gulp.task('sass', [], (done) => {
    return gulp.src('app/assets/sass/application.scss')

      .pipe(sass({includePaths: ['./app/assets/sass']}).on('error', function (err) {
          notify({ title: 'SASS Task' }).write(err.line + ': ' + err.message);
      }))
      .pipe(gutil.env.debug ? sourcemaps.write() : gutil.noop())
      .pipe(rename(util.format("%s.css", "styles")))
      .pipe(gulp.dest('./dist/_catalogs/masterpage/public/stylesheets'))
});