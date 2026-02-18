module.exports = {
  branches: [
    { name: "main" }
  ],

  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      // enable only ONE depending on platform
      // "@semantic-release/gitlab",
      // "@semantic-release/azure-devops",
      // "@semantic-release/bitbucket",
      "@semantic-release/github",
        {
          "assets": []
        }
    ],

    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
