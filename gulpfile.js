var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');

var plumberErrorHandler = {
   errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
   })
};

var bs = require('browser-sync').create();
gulp.task('browser-sync', function() {
  var files = [
      './style.min.css',
      './main.min.js',
      './index.html',
   ];
    bs.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(files).on('change', bs.reload);
});

gulp.task('sass', function() {
   gulp.src('./src/sass/style.scss')
      .pipe(plumber(plumberErrorHandler))
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./src'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./'))
});

gulp.task('scripts', function(){
    gulp.src('./src/main.js')
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('./'))
});

gulp.task('htmlmin', function() {
    return gulp.src('./src/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'))
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/*.js', ['scripts']);
  gulp.watch('./src/*.html', ['htmlmin']).on('change', bs.reload);
});

gulp.task('default', ['htmlmin', 'sass', 'scripts', 'watch']);