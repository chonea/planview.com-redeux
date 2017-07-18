var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');
var del = require('del');


gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever PHP or JS files change
  gulp.watch('app/js/**/*.js', browserSync.reload); 
  gulp.watch('app/pages/**/*.php', browserSync.reload); 
});

gulp.task('js', function(){
   gulp.src('app/js/redeux.js')
   //.pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js/'));
});

gulp.task('css', function(){
   gulp.src('app/css/*.css')
   //.pipe(concat('styles.css'))
   .pipe(cssnano())
   .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images/'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/*')
  .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'css', 'js', 'images', 'fonts'],
    callback
  )
})

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})