module.exports = {
  preset: 'jest-expo',

  // === Coverage ===
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],

  // === Test files ===
  testMatch: ['**/src/**/*.test.js'],

  // === React Native / Expo transforms ===
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },

  // === Coverage include/exclude ===
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/tests/**',
    '!src/constants/**',
    '!src/app/**',
    '!src/assets/**',
    '!src/**/**.{style,styles}.{js,jsx}',
    '!src/components/index.js'
  ],

  // === Alias support (~) ===
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  }
}
