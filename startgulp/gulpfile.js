const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const nodeSass = require("node-sass");
const sass = require("gulp-sass")(require("node-sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

// gulp.task("[Function Name]", function () {
// Do stuff here
// });

gulp.task("sass", function () {
  return gulp
    .src("app/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("js", function () {
  return gulp
    .src(["app/js/plugins/*.js", "app/js/*.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("app/*.scss", ["sass"]);
  gulp.watch("app/js/**/*.js", ["js"]);
});

gulp.task('default', ['sass', 'js', 'watch']);
