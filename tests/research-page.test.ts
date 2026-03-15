import { describe, expect, it } from "vitest";
import { researchPage } from "../src/data/research";

describe("research page data", () => {
  it("defines principles, workflow, and current themes", () => {
    expect(researchPage.title).toBe("研究");
    expect(researchPage.sections.map((section) => section.title)).toEqual([
      "研究原则",
      "研究流程",
      "当前关注主题",
      "未来研究方向",
    ]);
  });
});
