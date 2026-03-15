import { describe, expect, it } from "vitest";
import { systemPage } from "../src/data/system";

describe("system page data", () => {
  it("defines the four system layers", () => {
    expect(systemPage.title).toBe("系统");
    expect(systemPage.layers.map((layer) => layer.title)).toEqual([
      "数据层",
      "研究与验证层",
      "执行层",
      "监控与迭代层",
    ]);
  });
});
