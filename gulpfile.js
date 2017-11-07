var gulp = require('gulp');
var concat = require('gulp-concat');
var header = require('gulp-header');
var connect = require("gulp-connect");
var less = require("gulp-less");
var ejs = require("gulp-ejs");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');


gulp.task('ejs', function () {
    return gulp.src(["./src/*.html","./src/**/*.html","!./src/**/_*.html" ,"!./src/_*.html"])
        .pipe(ejs({}))
        .pipe(gulp.dest("./dist/"));
});

gulp.task('copy', function () {
    gulp.src(['./src/static/**/*'])
        .pipe(gulp.dest('./dist/static/'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['ejs']);
    gulp.watch('src/**/*.html', ['ejs']);
    gulp.watch('src/static/**/*', ['copy']);
});

gulp.task('server', function () {
    connect.server({
        root: './',
        livereload: true,
        port:8004
    });
});
gulp.task("default", ['ejs','copy','watch','server']);
