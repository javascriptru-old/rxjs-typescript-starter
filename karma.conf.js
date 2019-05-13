// Karma configuration
// Generated on Thu May 09 2019 16:01:27 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
  config.set({

    basePath: './src/',
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      'index.ts',
      './**/*.spec.ts'
    ],
    preprocessors: { "**/*.ts": "karma-typescript"},
    reporters: ["progress", "karma-typescript"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
