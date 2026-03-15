import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("theme and shell", () => {
  it("defines shared shell files and core design tokens", () => {
    expect(existsSync("src/layouts/SiteLayout.astro")).toBe(true);
    expect(existsSync("src/components/SiteHeader.astro")).toBe(true);
    expect(existsSync("src/components/SiteFooter.astro")).toBe(true);

    const css = readFileSync("src/styles/global.css", "utf8");
    expect(css).toContain("--color-bg");
    expect(css).toContain("--color-panel");
    expect(css).toContain("--color-accent");
    expect(css).toContain("--grid-line");
  });
});
