import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage lower sections", () => {
  it("mounts the system flow, notes preview, and contact close sections", () => {
    expect(existsSync("src/components/sections/SystemFlowSection.astro")).toBe(
      true,
    );
    expect(existsSync("src/components/sections/NotesPreviewSection.astro")).toBe(
      true,
    );
    expect(existsSync("src/components/sections/ContactCloseSection.astro")).toBe(
      true,
    );

    const page = readFileSync("src/pages/index.astro", "utf8");
    expect(page).toContain("SystemFlowSection");
    expect(page).toContain("NotesPreviewSection");
    expect(page).toContain("ContactCloseSection");
  });
});
