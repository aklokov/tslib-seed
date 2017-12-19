const buildPath = './build';

const src = 'src';
const testSrc = 'testSrc';
const behavior = 'behavior-tests';

const settings = {
  srcPath: `./${src}`,
  testPath: `./${testSrc}`,
  behaviorPath: `./${behavior}`,
  buildPath,
  srcBuildPath: `${buildPath}/${src}`,
  testBuildPath: `${buildPath}/${testSrc}`,
  behaviorBuildPath: `${buildPath}/${behavior}`
}

module.exports = settings;