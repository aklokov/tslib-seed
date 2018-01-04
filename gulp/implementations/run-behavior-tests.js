const gulp = require("gulp");
const settings = require("../settings");
const path = require("path");
const cucumber = require("gulp-cucumber");

function runTests(obj = {}) {
  const cucumberSettings = {
    steps: settings.behaviorBuildPath + "/step-definitions/**/*.js",
    support: settings.behaviorBuildPath + "/support/**/*.js",
    ...obj
  };

  return gulp.src(settings.behaviorPath + "/features/**/*.feature")
    .pipe(cucumber(cucumberSettings));
}

gulp.task("run-behavior-tests-tag", function () {
  return runTests({ tags: "@dev" });
});


gulp.task("run-behavior-tests", function () {
  return runTests();
});
