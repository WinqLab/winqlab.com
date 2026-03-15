# Hero Alignment Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Tighten homepage hero spacing and shift the supporting card upward so the two-column composition feels better aligned.

**Architecture:** Keep the current `HeroSection` structure and only adjust layout values: hero padding, grid spacing, text block spacing, and the vertical offset of the right-side card. Validation will use Astro checks, build output, and a fresh local browser screenshot.

**Tech Stack:** `Astro`, component-scoped CSS, local browser screenshot via headless Chrome

---

### Task 1: Reduce first-screen whitespace

**Files:**
- Modify: `src/components/sections/HeroSection.astro`

**Step 1: Reduce hero top padding**

Lower the hero section top padding so the first content block starts closer to the header.

**Step 2: Reduce hero bottom padding**

Tighten the space between the hero and the next section.

### Task 2: Improve left-right alignment

**Files:**
- Modify: `src/components/sections/HeroSection.astro`

**Step 1: Move the right card upward**

Decrease the top offset on `.hero-surface` so the card sits higher.

**Step 2: Rebalance inter-column spacing**

Adjust grid gap only if needed so the composition remains calm after the upward shift.

### Task 3: Validate visually and structurally

**Files:**
- No new files

**Step 1: Capture a fresh local screenshot**

Run headless Chrome against `http://127.0.0.1:4321` and inspect the hero composition.

**Step 2: Run Astro validation**

Run:

```bash
bun run check
bun run build
```

Expected:

1. `astro check` passes
2. Static build succeeds

**Note:** No new automated tests in this iteration per user instruction. Validation is based on visual review plus build safety checks.
