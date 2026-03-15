import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage top sections", () => {
  it("mounts the hero and core research sections on the homepage", () => {
    expect(existsSync("src/components/sections/HeroSection.astro")).toBe(true);
    expect(existsSync("src/components/sections/CapabilityGrid.astro")).toBe(true);
    expect(existsSync("src/components/sections/MethodologySection.astro")).toBe(
      true,
    );
    expect(
      existsSync("src/components/sections/ResearchThemesSection.astro"),
    ).toBe(true);

    const page = readFileSync("src/pages/index.astro", "utf8");
    expect(page).toContain("HeroSection");
    expect(page).toContain("CapabilityGrid");
    expect(page).toContain("MethodologySection");
    expect(page).toContain("ResearchThemesSection");
  });
});
