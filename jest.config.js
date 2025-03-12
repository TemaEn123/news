export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  // Указываем, где находятся тесты
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  // Если используете TypeScript
  preset: 'ts-jest',

  // Если используете Babel
  //   transform: {
  //     '^.+\\.jsx?$': 'babel-jest',
  //     '^.+\\.tsx?$': 'ts-jest',
  //   },

  // Указываем, какие файлы игнорировать
  testPathIgnorePatterns: ['/node_modules/', '/config/'],

  // Поддержка модулей (если используете ES-модули)
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

  // Настройки для работы с Webpack (если нужно)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Пример для алиасов Webpack
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': 'jest-transform-stub',
  },
};
