import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("secondary page polish", () => {
  it("uses a shared page hero and page-surface styling across secondary pages", () => {
    expect(existsSync("src/components/PageHero.astro")).toBe(true);

    const research = readFileSync("src/pages/research.astro", "utf8");
    const system = readFileSync("src/pages/system.astro", "utf8");
    const notes = readFileSync("src/pages/notes.astro", "utf8");
    const contact = readFileSync("src/pages/contact.astro", "utf8");
    const css = readFileSync("src/styles/global.css", "utf8");

    expect(research).toContain("PageHero");
    expect(system).toContain("PageHero");
    expect(notes).toContain("PageHero");
    expect(contact).toContain("PageHero");
    expect(css).toContain(".page-surface");
    expect(css).toContain(".page-meta");
    expect(css).toContain(".page-card");
  });
});
