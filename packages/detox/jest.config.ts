/* eslint-disable */
export default {
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'json'],
  globals: {},
  displayName: 'react-native',
  testEnvironment: 'node',
  verbose: true,
  preset: '../../jest.preset.js',
};
