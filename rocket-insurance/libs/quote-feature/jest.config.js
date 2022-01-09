module.exports = {
  displayName: 'quote-feature',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['quote-config.ts'],
  coverageDirectory: '../../coverage/libs/quote-feature',
};
