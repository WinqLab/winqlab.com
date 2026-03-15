# Hero Density Reduction Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce homepage hero visual density so the first screen reads clearly, with a strict two-line title and a quieter supporting card.

**Architecture:** Keep the Astro homepage structure intact, but rebalance the `HeroSection` and `SiteHeader` components. The update will focus on typography, spacing, card hierarchy, and text density rather than changing page information architecture.

**Tech Stack:** `Astro`, `TypeScript`, component-scoped CSS, shared global CSS

---

### Task 1: Reduce header chrome noise

**Files:**
- Modify: `src/components/SiteHeader.astro`
- Modify: `src/styles/global.css`

**Step 1: Remove English-heavy secondary header labels**

Replace `Research Interface` and `Static v1` with a simpler Chinese-only brand treatment.

**Step 2: Tighten header spacing**

Reduce vertical padding and simplify the rail so the header recedes behind the hero instead of competing with it.

### Task 2: Rebuild hero hierarchy

**Files:**
- Modify: `src/components/sections/HeroSection.astro`
- Modify: `src/data/home.ts`

**Step 1: Force a strict two-line hero title**

Render the approved message as two balanced lines:

`从研究假设到系统验证`

`再到实盘交易`

**Step 2: Reduce left-column density**

Shrink headline scale, increase line-height, narrow paragraph width, and simplify supporting copy spacing.

**Step 3: Demote the right-side card**

Reduce card size, move it lower, shorten its copy, and keep only a few compact rows so it acts as support.

### Task 3: Verify rendering safety

**Files:**
- No new files

**Step 1: Run Astro type and template validation**

Run:

```bash
bun run check
```

Expected:

1. `astro check` passes

**Step 2: Run static build**

Run:

```bash
bun run build
```

Expected:

1. Static build succeeds

**Note:** No new automated tests in this iteration per user instruction. Validation is limited to Astro checks, static build, and visual refinement of the existing UI.
