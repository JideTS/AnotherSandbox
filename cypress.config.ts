import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'xk1nk5',
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
