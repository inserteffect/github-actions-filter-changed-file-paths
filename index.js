const core = require("@actions/core");
const github = require("@actions/github");

try {
  const changedFiles = JSON.parse(core.getInput("changedFiles"));
  const exclude = JSON.parse(core.getInput("exclude"));
  const depth = core.getInput("depth");

  const filteredPaths = Array.from(
    new Set(
      changedFiles
        .map((e) => e.split("/").slice(0, depth).join("/"))
        .filter((e) => !exclude.some((dir) => e.startsWith(dir)))
    )
  );

  core.setOutput("filteredPaths", filteredPaths);
} catch (error) {
  core.setFailed(error.message);
}
