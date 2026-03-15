import { describe, expect, it } from "vitest";
import { navigationItems, siteMeta } from "../src/data/site";

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
});
