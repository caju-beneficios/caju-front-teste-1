import { defineConfig } from "cypress";
import cypressCoverage from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressCoverage(on, config);
      return config;
    },
  },
});
