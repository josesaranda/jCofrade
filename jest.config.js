// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
};
