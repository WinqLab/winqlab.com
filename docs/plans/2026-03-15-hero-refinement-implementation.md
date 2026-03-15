# WinqLab Hero Refinement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the homepage hero copy and layout so it is clearer, calmer, and better aligned with the approved research-to-live-trading message.

**Architecture:** Keep the existing Astro homepage structure, but simplify the `HeroSection` component and the associated hero data in `src/data/home.ts`. Remove noisy supporting UI, reduce the right-side panel to one compact structure card, and rebalance spacing and typography rather than changing the overall information architecture.

**Tech Stack:** `Astro`, `TypeScript`, `Vitest`, CSS in component styles

---

### Task 1: Update the hero copy model

**Files:**
- Modify: `src/data/home.ts`
- Test: `tests/hero-refresh.test.ts`

**Step 1: Write the failing test**

Assert that the hero title is:

`从研究假设到系统验证，再到实盘交易`

and that the supporting line references a path into live trading.

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/hero-refresh.test.ts
```

Expected:

1. FAIL because the old title and supporting copy still exist.

**Step 3: Write minimal implementation**

Update the hero data so the approved copy becomes the source of truth.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/hero-refresh.test.ts
```

Expected:

1. PASS

### Task 2: Simplify the hero structure and spacing

**Files:**
- Modify: `src/components/sections/HeroSection.astro`
- Test: `tests/hero-refresh.test.ts`

**Step 1: Write the failing test**

Extend the same test to assert that:

1. `hero-status` is no longer rendered
2. `hero-ledger` is no longer rendered
3. the hero uses one compact right-side panel

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/hero-refresh.test.ts
```

Expected:

1. FAIL because the old status pills, ledger cards, and dense right-side panel still exist.

**Step 3: Write minimal implementation**

1. Remove the hero status pills
2. Remove the hero ledger cards
3. Replace the current right-side multi-panel interface with one compact structure panel
4. Loosen the headline line-height and adjust width so the wrap feels calmer

**Step 4: Run verification**

Run:

```bash
bun run check
bun run test
bun run build
```

Expected:

1. `astro check` passes
2. tests pass
3. static build succeeds
