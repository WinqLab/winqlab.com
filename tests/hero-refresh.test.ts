import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { homePage } from "../src/data/home";
import { siteMeta } from "../src/data/site";

describe("hero refresh", () => {
  it("updates the homepage message from research to live trading", () => {
    expect(homePage.hero.title).toBe("从研究假设到系统验证，再到实盘交易");
    expect(homePage.hero.supporting).toContain("实盘交易");
    expect(siteMeta.heroTitle).toBe(homePage.hero.title);
  });

  it("reduces the hero surface to one calmer system card", () => {
    const hero = readFileSync("src/components/sections/HeroSection.astro", "utf8");

    expect(hero).not.toContain("hero-status");
    expect(hero).not.toContain("hero-ledger");
    expect(hero).not.toContain("hero-surface__panel--pipeline");
    expect(hero).not.toContain("hero-surface__panel--matrix");
    expect(hero).not.toContain("hero-surface__panel--terminal");
    expect(hero).toContain("hero-surface__card");
  });
});
