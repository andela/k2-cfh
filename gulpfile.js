const bower = require('gulp-bower');
const browserSync = require('browser-sync');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');

gulp.task('watch', () => {
  gulp.watch('app/views/**', browserSync.reload());
  gulp.watch('public/js/**', browserSync.reload());
  gulp.watch('app/**/*.js', browserSync.reload());
  gulp.watch('public/views/**', browserSync.reload());
  gulp.watch('public/css/common.scss', ['sass']);
  gulp.watch('public/css/**', browserSync.reload());
});

gulp.task('lint', () => {
  gulp.src(['gulpfile.js',
    'public/js/**/*.js',
    'app/**/*.js',
    'test/**/*.js'
  ])
    .pipe(eslint());
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    watch: ['app', 'config'],
    env: {
      PORT: 3000,
    }
  });
});

gulp.task('sass', () => {
  gulp.src('public/css/common/scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('bower', () => {
  bower().pipe(gulp.dest('./bower_components'));
});

gulp.task('mochaTest', () => {
  gulp.src(['test/**/*.js'])
    .pipe(mocha({
      reporter: 'spec',
    }));
});

gulp.task('test', ['mochaTest']);
gulp.task('install', ['bower']);
gulp.task('production', ['bower', 'sass']);
gulp.task('default', ['nodemon', 'watch', 'sass']);
