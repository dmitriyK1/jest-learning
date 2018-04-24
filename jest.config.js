module.exports = {
  cache: false,
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.js",
  setupFiles: ['<rootDir>/__mocks__/polyfills.js'],
  "transform": {
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': "<rootDir>/__mocks__/fileTransform.js",
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/__mocks__/babelTransform.js',
    '^.+\\.css$': '<rootDir>/__mocks__/cssTransform.js',
  },
  moduleFileExtensions: [
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
