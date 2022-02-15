const core = require("@actions/core");
const github = require("@actions/github");

try {
  const changedFiles = core.getInput("changedFiles");
  const depth = core.getInput("depth");

  const filteredPaths = Array.from(
    new Set(
      JSON.parse(changedFiles).map((e) => {
        return e.split("/").slice(0, depth).join("/");
      })
    )
  );

  core.setOutput("filteredPaths", filteredPaths);
} catch (error) {
  core.setFailed(error.message);
}
