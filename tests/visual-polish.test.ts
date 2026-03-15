import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("visual polish structure", () => {
  it("keeps the calmer single-surface hero while preserving shared interface polish", () => {
    const hero = readFileSync("src/components/sections/HeroSection.astro", "utf8");
    const methodology = readFileSync(
      "src/components/sections/MethodologySection.astro",
      "utf8",
    );
    const systemFlow = readFileSync(
      "src/components/sections/SystemFlowSection.astro",
      "utf8",
    );
    const globalCss = readFileSync("src/styles/global.css", "utf8");

    expect(hero).toContain("hero-surface__card");
    expect(hero).toContain("hero-surface");
    expect(hero).not.toContain("hero-status");
    expect(hero).not.toContain("hero-ledger");
    expect(methodology).toContain("methodology-rail");
    expect(systemFlow).toContain("system-console");
    expect(globalCss).toContain("backdrop-filter");
  });
});
