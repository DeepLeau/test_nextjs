module.exports = {
  testEnvironment: 'jsdom',
  transform: { '^.+\.(ts|tsx|js|jsx)$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }] },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  setupFilesAfterFramework: ['<rootDir>/jest.setup.js'],
}