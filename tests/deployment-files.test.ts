import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("deployment readiness", () => {
  it("includes custom-domain and GitHub Pages deployment files", () => {
    expect(existsSync(".github/workflows/deploy.yml")).toBe(true);
    expect(readFileSync(".github/workflows/deploy.yml", "utf8")).toContain(
      "actions/deploy-pages",
    );
    expect(existsSync("public/robots.txt")).toBe(true);
    expect(existsSync("src/pages/404.astro")).toBe(true);
  });
});
