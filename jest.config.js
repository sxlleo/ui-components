// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'md', 'jpg'],
  modulePathIgnorePatterns: ['/_site/'],
  testPathIgnorePatterns: ['/node_modules/', 'node'],
  transform: {
    '.*\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ["/node_modules/", "/dist/"],
  testRegex: '.*\\.test\\.js$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    'axx-design-vue$': '<rootDir>/src/index.js',
    'axx-design-vue/es': '<rootDir>/src/components',
    '^vue$': 'vue/dist/vue.common.js',
  },
  // clearMocks: true,
  coverageDirectory: "coverage",
};
