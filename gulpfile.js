/* eslint-disable */

const babel = require('gulp-babel');
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

gulp.task('build', () => {
  gulp.src(['./**/*.js', '!dist/**', '!node_modules/**', '!gulpfile.babel.js', '!gulpfile.js', '!public/lib/**', '!bower_components/**/*'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', () => {
  nodemon({
    script: 'dist/server.js',
    ext: 'js',
    ignore: ['README.md', 'node_modules/**', '.DS_Store'],
    watch: ['app', 'config'],
    env: {
      PORT: 3000,
    }
  });
});

gulp.task('transfer_json', () => {
  gulp.src('config/env/**/*.json')
    .pipe(gulp.dest('dist/config/env'));
});

// Move jade files app/views to dist/app/views
gulp.task('transfer_jades', () => {
  gulp.src('app/views/**/*')
    .pipe(gulp.dest('dist/app/views'));
});

// Move generated libraries public folder to dest/public
gulp.task('transfer_libs', () => {
  gulp.src(['public/**/*', '!public/js/**'])
    .pipe(gulp.dest('dist/public'));
});

// Move generated libraries public folder to dest/public
gulp.task('transfer_libs_inner', () => {
  gulp.src(['public/lib/**/**/*', '!public/js/**'])
    .pipe(gulp.dest('dist/public/lib'));
});

gulp.task('sass', () => {
  gulp.src('public/css/common/scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('bower', () => {
  bower()
    .pipe(gulp.dest('./dist/public/lib'));
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
gulp.task('bundle', ['build', 'transfer_json', 'transfer_jades', 'transfer_libs', 'transfer_libs_inner']);


gulp.task('default', ['nodemon', 'watch', 'sass']);
