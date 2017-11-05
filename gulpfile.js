const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')

/*
 |--------------------------------------------------------------------------
 | Compile main JS
 |--------------------------------------------------------------------------
 */
gulp.task('js', () => {
  return gulp.src('static/js/src/*.js')
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(babel({
      presets: [ 'env' ]
    }))
    .pipe(gulp.dest('static/js/dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ mangle: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/js/dist'))
})

/*
 |--------------------------------------------------------------------------
 | Compile sass
 |--------------------------------------------------------------------------
 */
gulp.task('sass', () => {
  return gulp.src('static/sass/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssmin())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/css/dist'))
})

gulp.task('images', () => {
  return gulp.src('static/images/src/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('static/images/dist'))
})

gulp.task('styles', [ 'sass', 'icons' ])

gulp.task('watch', () => {
  gulp.watch('static/sass/*.scss', [ 'styles' ])
  gulp.watch('static/js/src/*.js', [ 'js' ])
})

gulp.task('clean', () => {
  return del([
    'static/css/src',
    'static/css/dist',
    'static/css/fonts',
    'static/js/dist',
    'static/images/dist'
  ])
})

gulp.task('build', [ 'styles', 'scripts', 'images' ])
gulp.task('default', [ 'build', 'watch' ])
