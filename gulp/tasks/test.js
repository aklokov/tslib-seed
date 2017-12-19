const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('test', function (done) {
    return sequence('build', 'run-tests', 'run-behavior-tests', done);
});

gulp.task('test-tag', function (done) {
  return sequence('build', 'run-tests', 'run-behavior-tests-tag', done);
});