var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    md5 = require("gulp-md5-plus"),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less');


gulp.task('dropload', function () {
  gulp.src('dropload/dist/dropload/*.js')
 .pipe(jshint())                                 //检验js
 .pipe(jshint.reporter()) // 输出检查结果
  .pipe(concat('bundle.js'))                //合并js
  .pipe(uglify())                         //压缩js
  .pipe(gulp.dest('dropload/dist/dropload'))
  //.pipe(md5(10))
 });
//gulp.watch("./dropload/dist/*.js", ["dropload"]);