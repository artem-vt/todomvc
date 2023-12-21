const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  baseUrl: "http://localhost:8080",
  projectId: "6gd1w8"
})