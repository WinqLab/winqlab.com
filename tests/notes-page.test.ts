import { describe, expect, it } from "vitest";
import { notesPage } from "../src/data/notes";

describe("notes page data", () => {
  it("frames future notes around methods, systems, and experiments", () => {
    expect(notesPage.title).toBe("札记");
    expect(notesPage.tracks).toEqual(["研究方法", "系统设计", "实验记录"]);
  });
});
