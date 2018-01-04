const settings = require("./settings")
const constants = require("./constants");

const srcTsFiles = settings.srcPath + constants.allTs;
const testTsFiles = settings.testPath + constants.allTs;
const testFiles = settings.testBuildPath + constants.allJs;
const behaviorTsFiles = settings.behaviorPath + constants.allTs;

const buildSettings = {
  srcTsFiles,
  testTsFiles,
  testFiles,
  behaviorTsFiles,
  projectTsFiles: [srcTsFiles, testTsFiles, behaviorTsFiles]
}

module.exports = Object.assign({}, settings, buildSettings);