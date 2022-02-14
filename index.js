const core = require("@actions/core");
const github = require("@actions/github");

try {
  const changedFiles = core.getInput("changedFiles");
  console.log(changedFiles);
  const filteredPaths = Array.from(
    new Set(
      JSON.parse(changedFiles).map((e) => {
        return e.replace(e.split("/").pop(), "");
      })
    )
  );

  core.setOutput("filteredPaths", filteredPaths);
} catch (error) {
  core.setFailed(error.message);
}
