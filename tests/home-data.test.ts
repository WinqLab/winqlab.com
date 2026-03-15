import { describe, expect, it } from "vitest";
import { homePage } from "../src/data/home";

describe("homepage content model", () => {
  it("contains the approved hero, capability, methodology, and system copy", () => {
    expect(homePage.hero.title).toBe("从研究假设到系统验证，再到实盘交易");
    expect(homePage.hero.supporting).toContain("实盘交易");
    expect(homePage.hero.actions.map((item) => item.label)).toEqual([
      "查看研究框架",
      "浏览系统结构",
    ]);
    expect(homePage.capabilities).toHaveLength(5);
    expect(homePage.methodology.steps).toContain("问题定义");
    expect(homePage.methodology.steps).toContain("持续迭代");
    expect(homePage.researchThemes).toContain("趋势与动量类策略研究");
    expect(homePage.systemFlow).toContain("市场数据");
    expect(homePage.systemFlow).toContain("监控与复盘");
  });
});
