// 

var gulp = require('gulp');
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');
// var clean = require('gulp-clean');
// var concat = require('gulp-concat');

var dest = 'dist/';

//set sass options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var filesToMove = [
        './*.png',
        './*.html',
        './.htaccess',
        './*.txt',
        './img/**/*.*'
    ];


gulp.task('scripts', function () {
  return gulp.src('js/**/*.js')
  .pipe(concat('main.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(dest + 'js'));
});

gulp.task('sass', function(){
  return gulp.src('css/*.scss')
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest(dest + 'css'))
});

gulp.task('move', function(){
  gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest(dest));
});

gulp.task('clean', function () {
  return del([
      dest + '*.*'
    ]);
});

gulp.task('deploy', function() {
  return gulp.src(dest + '**/*')
    .pipe(ghPages());
});

gulp.task('serve', function() {
    browserSync.init({
      server: {
        baseDir: "./" + dest
      }
    });
    gulp.watch("css/**/*.scss", ['sass-watch']);
    gulp.watch("js/**/*.js", ['scripts-watch']);
    gulp.watch("./*.html", ['move-watch']);
    //gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass-watch', ['sass'], browserSync.reload);
gulp.task('scripts-watch', ['scripts'], browserSync.reload);
gulp.task('move-watch', ['move'], browserSync.reload);

gulp.task('default', ['clean', 'move', 'scripts', 'sass', 'serve']);
gulp.task('gh-pages', ['clean', 'move', 'scripts', 'sass', 'deploy']);
