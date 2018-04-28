module.exports = {
  verbose: true,
  rootDir: '../',
  testMatch: ['<rootDir>/tests/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/', 'jest.config.js'],
  moduleNameMapper: {
    '^(?!@babel)@(.*)$': '<rootDir>/src/$1'
  }
};
