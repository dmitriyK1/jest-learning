module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/__mocks__/fileMock.js",
    // "\\.(css|less)$": "<rootDir>/jest/__mocks__/styleMock.js",
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  globals: {}, // used for mocking global variables
  setupFiles: ['<rootDir>/jest/setupFiles/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};