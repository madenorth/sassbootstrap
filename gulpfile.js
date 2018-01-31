var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('util');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// If you're only interested in compiling the sass, this is the only gulp task you need to be concerned with.
// The other tasks are solely there to facilitate viewing of the demo page
gulp.task('sass', [], (done) => {
    return gulp.src('app/assets/sass/application.scss')
      .pipe(gutil.env.debug ? sourcemaps.init() : gutil.noop())
      .pipe(sass({includePaths: ['./app/assets/sass']}).on('error', function (err) {
          notify({ title: 'SASS Task' }).write(err.line + ': ' + err.message);
      }))
      .pipe(gutil.env.debug ? sourcemaps.write() : gutil.noop())
      //don't clean if gulp is ran with '--debug'
      .pipe(gutil.env.debug ? gutil.noop() : cleanCSS({ processImport: false }))
      .pipe(rename(util.format("%s.css", "stylesheet")))
      .pipe(gulp.dest('./dist/_catalogs/masterpage/public/stylesheets'))
});


// Copy the bootstrap fonts
gulp.task('bootstrap:fonts',['sass'], (done) => {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/**')
    .pipe(gulp.dest('./dist/_catalogs/masterpage/public/fonts'))
});

// copy the bootstrap js
gulp.task('bootstrap:js',['bootstrap:fonts'], (done) => {
    return gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
    .pipe(gulp.dest('./dist/_catalogs/masterpage/public/javascripts'))
});

gulp.task('default', ['bootstrap:js','bootstrap:fonts','sass'], (done) => {
    // uncomment the following line if you want to place a qwatch on your SASS files
    gulp.watch('./app/assets/sass/**/*.scss',['sass']);
});