const gulp = require('gulp');
const settings = require('../settings');
const tslint = require('gulp-tslint');

function lint(files) {
  return gulp.src(files)
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({
      emitError: process.env.emitError
    }));
}

gulp.task('tslint', function () {
  return gulp.src(settings.projectTsFiles)
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({
      emitError: process.env.emitError
    }));
});