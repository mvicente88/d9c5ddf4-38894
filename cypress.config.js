const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '424cp5',
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  video: true,
})