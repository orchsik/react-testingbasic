"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const jest = require("jest");
const execSync = require("child_process").execSync;

// process.argv ???
// yarn test --watch 컨맨드 입력할 경우 아래와 같음.
// argv: [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\orchsik\\Downloads\\react-testingBasic\\rtl-tutorial\\scripts\\test.js',
//   --watch
// ]
let argv = process.argv.slice(2);

// process.env.CI ???
// netlify(호스팅 서비스) 사용시 설정되는 값

function isInGitRepository() {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync("hg --cwd . root", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch unless on CI or explicitly running all tests
if (
  !process.env.CI &&
  argv.indexOf("--watchAll") === -1 &&
  argv.indexOf("--watchAll=false") === -1
) {
  // https://github.com/facebook/create-react-app/issues/5210
  const hasSourceControl = isInGitRepository() || isInMercurialRepository();
  argv.push(hasSourceControl ? "--watch" : "--watchAll");
}

// jest --watch [VS] jest --watchAll
// jest --watch     # runs jest -o by default jest -o : Run tests related to changed files based on hg/git (uncommitted files)
// jest --watchAll  # runs all tests

jest.run(argv);
