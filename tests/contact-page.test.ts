import { describe, expect, it } from "vitest";
import { contactPage } from "../src/data/contact";

describe("contact page data", () => {
  it("offers a restrained collaboration-oriented contact path", () => {
    expect(contactPage.title).toBe("联系");
    expect(contactPage.statement).toContain("欢迎建立联系");
  });
});
