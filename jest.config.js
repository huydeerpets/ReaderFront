module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!<rootDir>/node_modules/',
    '!src/index.js',
    '!src/Routes.js',
    '!src/registerServiceWorker.js',
    '!src/common/WithTracker.js',
    '!src/App.js',
    '!src/utils/mocks/*.{js}'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.{js,jsx,mjs}',
    '**/?(*.)(spec|test).{js,jsx,mjs}'
  ]
};
