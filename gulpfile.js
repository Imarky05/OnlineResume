var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlmin = require('gulp-htmlmin');

var plumberErrorHandler = {
   errorHandler: notify.onError({
      title: 'Gulp',
      message: 'Error: <%= error.message %>'
   })
};

var bs = require('browser-sync').create();
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
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
      .pipe(gulp.dest('./build'))
});

gulp.task('scripts', function(){
    gulp.src('./src/*.js')
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build'))
});

gulp.task('jscs', function () {
   return gulp.src('./src/*.js')
       .pipe(jscs('.jscsrc'));
});

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('htmlmin', function() {
    return gulp.src('./src/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./build'))
});

gulp.task('watch', ['browser-sync'], function() {
   gulp.watch('./src/*.html', ['htmlmin']).on('change', bs.reload);
   gulp.watch('./src/sass/*.scss', ['sass']).pipe(bs.reload({stream: true}));
   gulp.watch('./src/*.js', ['scripts']).on('change', bs.reload);
});

gulp.task('default', ['htmlmin', 'sass', 'scripts', 'watch']);