const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 3000;

app.use(express.static(__dirname));

app.get("/status", (req, res) => {
  res.json({
    status: "Running",
    environment: "Docker Container on AWS EC2",
    deploymentTime: new Date(),
    commit: process.env.GITHUB_SHA || "local-dev"
  });
});

app.listen(PORT, () => {
  console.log(`CloudDeploy running on port ${PORT}`);
});