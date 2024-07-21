/** @type {import('jest').Config} */
export default {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  coverageDirectory: "<rootDir>/jest-coverage",
  coverageProvider: "v8",
};
