import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { navigationItems, siteMeta } from "../src/data/site";

const currentDir = dirname(fileURLToPath(import.meta.url));
const globalCss = readFileSync(resolve(currentDir, "../src/styles/global.css"), "utf8");

describe("site metadata", () => {
  it("uses the approved WinqLab brand and route structure", () => {
    expect(siteMeta.name).toBe("WinqLab");
    expect(siteMeta.siteUrl).toBe("https://winqlab.com");
    expect(siteMeta.heroTitle).toBe("从研究假设到系统验证，再到实盘交易");
    expect(navigationItems.map((item) => item.label)).toEqual([
      "首页",
      "研究",
      "系统",
      "札记",
      "联系",
    ]);
    expect(navigationItems.map((item) => item.href)).toEqual([
      "/",
      "/research",
      "/system",
      "/notes",
      "/contact",
    ]);
  });

  it("keeps the site brand name in its original letter case", () => {
    expect(globalCss).toMatch(/\.site-brand__name\s*\{/);
    expect(globalCss).not.toMatch(
      /\.site-brand__name\s*\{[^}]*text-transform:\s*uppercase;/s,
    );
  });
});
