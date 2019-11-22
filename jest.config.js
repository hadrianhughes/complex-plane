module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': 'babel-jest'
  },
  exclude: ['src/**/*.test.ts']
};
