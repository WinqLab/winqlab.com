import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("deployment readiness", () => {
  it("includes custom-domain and GitHub Pages deployment files", () => {
    const workflow = readFileSync(".github/workflows/deploy.yml", "utf8");

    expect(existsSync(".github/workflows/deploy.yml")).toBe(true);
    expect(workflow).toContain("actions/deploy-pages");
    expect(workflow).toContain("actions/setup-node");
    expect(workflow).toContain("node-version: 22.12.0");
    expect(existsSync("public/CNAME")).toBe(true);
    expect(readFileSync("public/CNAME", "utf8").trim()).toBe("winqlab.com");
    expect(existsSync("public/robots.txt")).toBe(true);
    expect(existsSync("src/pages/404.astro")).toBe(true);
  });
});
