# WinqLab Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the first public `WinqLab` website as a polished Chinese-language quant research lab brand site, optimized for static deployment on `GitHub Pages`.

**Architecture:** Use a static-first `Astro` site with content stored in local TypeScript data files under `src/data`. Compose the site from reusable `.astro` layout and section components so the homepage and supporting pages share one visual system, remain easy to extend, and can later grow into notes or topic pages without rewriting the foundation.

**Tech Stack:** `Astro`, `TypeScript`, `Tailwind CSS`, `Vitest`, `ESLint`, `GitHub Pages`

---

## Preflight

The current directory was not a Git repository when this plan was written. If the Astro scaffold does not initialize Git automatically, run `git init` before the first commit step.

Use current official references while implementing:

- Astro install: [Install Astro](https://docs.astro.build/en/install-and-setup/)
- Astro styling and Tailwind: [Astro Styling Guide](https://docs.astro.build/en/guides/styling/)
- Astro GitHub Pages deploy: [Deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

### Preflight A: Scaffold the Astro project

Run:

```bash
bun create astro@latest .
```

If prompted, choose:

1. Template: `Empty`
2. TypeScript: `Strict`
3. Install dependencies: `Yes`
4. Initialize a new Git repository: `Yes`

Expected:

1. `package.json` exists.
2. `astro.config.mjs` exists.
3. `src/pages/index.astro` exists.
4. Dependencies install successfully.

### Preflight B: Add Astro integrations

Run:

```bash
bunx astro add tailwind --yes
bunx astro add sitemap --yes
```

Expected:

1. Tailwind dependencies install successfully.
2. Sitemap integration is added to `astro.config.mjs`.
3. The project is ready for global styling and SEO-oriented static output.

### Preflight C: Add test tooling and scripts

Run:

```bash
bun add -d vitest
```

Create or modify:

1. `package.json`
2. `vitest.config.mts`
3. `tests/.gitkeep`

Add scripts:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

Use this minimal Vitest config:

```ts
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["tests/**/*.test.ts"],
  },
});
```

Run:

```bash
bun run test
```

Expected:

1. Vitest starts successfully.
2. It reports zero tests found or only missing-test output, not a config crash.

### Preflight D: Commit the scaffold baseline

Run:

```bash
git add .
git commit -m "chore: scaffold astro site for winqlab"
```

Expected:

1. The Astro scaffold, integrations, and test harness are committed before feature work starts.

### Task 1: Establish site metadata, navigation, and domain config

**Files:**
- Create: `src/data/site.ts`
- Modify: `astro.config.mjs`
- Test: `tests/site-data.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { navigationItems, siteMeta } from "../src/data/site";

describe("site metadata", () => {
  it("uses the approved WinqLab brand and route structure", () => {
    expect(siteMeta.name).toBe("WinqLab");
    expect(siteMeta.siteUrl).toBe("https://winqlab.com");
    expect(siteMeta.heroTitle).toBe("量化研究，从假设到系统化验证。");
    expect(navigationItems.map((item) => item.label)).toEqual([
      "首页",
      "研究",
      "系统",
      "札记",
      "联系",
    ]);
    expect(navigationItems.map((item) => item.href)).toEqual([
      "/",
      "/research",
      "/system",
      "/notes",
      "/contact",
    ]);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/site-data.test.ts
```

Expected:

1. FAIL because `src/data/site.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/site.ts`:

```ts
export const siteMeta = {
  name: "WinqLab",
  siteUrl: "https://winqlab.com",
  title: "WinqLab | 量化研究实验室",
  description:
    "WinqLab 专注于量化策略研究、交易系统构建与研究基础设施设计。",
  heroTitle: "量化研究，从假设到系统化验证。",
};

export const navigationItems = [
  { label: "首页", href: "/" },
  { label: "研究", href: "/research" },
  { label: "系统", href: "/system" },
  { label: "札记", href: "/notes" },
  { label: "联系", href: "/contact" },
];
```

Then set the public site URL in `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://winqlab.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Keep `site` pointed at the custom domain. Do not set a `base` path for `V1`.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/site-data.test.ts
```

Expected:

1. PASS

**Step 5: Commit**

```bash
git add astro.config.mjs src/data/site.ts tests/site-data.test.ts
git commit -m "feat: add winqlab site metadata and routing data"
```

### Task 2: Build the shared layout, header/footer, and design tokens

**Files:**
- Create: `src/layouts/SiteLayout.astro`
- Create: `src/components/SiteHeader.astro`
- Create: `src/components/SiteFooter.astro`
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro`
- Test: `tests/theme-and-shell.test.ts`

**Step 1: Write the failing test**

```ts
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("theme and shell", () => {
  it("defines shared shell files and core design tokens", () => {
    expect(existsSync("src/layouts/SiteLayout.astro")).toBe(true);
    expect(existsSync("src/components/SiteHeader.astro")).toBe(true);
    expect(existsSync("src/components/SiteFooter.astro")).toBe(true);

    const css = readFileSync("src/styles/global.css", "utf8");
    expect(css).toContain("--color-bg");
    expect(css).toContain("--color-panel");
    expect(css).toContain("--color-accent");
    expect(css).toContain("--grid-line");
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/theme-and-shell.test.ts
```

Expected:

1. FAIL because the layout, components, and token file do not all exist yet.

**Step 3: Write minimal implementation**

Create a shared layout that owns:

1. `<html lang="zh-CN">`
2. `<title>` and meta description props
3. header and footer mounting
4. one main content slot

Create `src/styles/global.css` with token definitions such as:

```css
:root {
  --color-bg: #0b1118;
  --color-panel: rgba(14, 24, 35, 0.78);
  --color-text: #e8eef5;
  --color-muted: #9db0c4;
  --color-accent: #38bdf8;
  --grid-line: rgba(148, 163, 184, 0.14);
}
```

Keep the visual direction aligned with the approved brand:

1. dark graphite background
2. cool neutral panels
3. cyan-blue accent
4. grid and line motifs

Wire `src/pages/index.astro` to use `SiteLayout.astro` immediately, even if the page body remains minimal for the moment.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/theme-and-shell.test.ts
bun run build
```

Expected:

1. The shell test PASSes.
2. The Astro production build succeeds.

**Step 5: Commit**

```bash
git add src/layouts/SiteLayout.astro src/components/SiteHeader.astro src/components/SiteFooter.astro src/styles/global.css src/pages/index.astro tests/theme-and-shell.test.ts
git commit -m "feat: add shared layout and visual system foundation"
```

### Task 3: Create the homepage content model

**Files:**
- Create: `src/data/home.ts`
- Test: `tests/home-data.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { homePage } from "../src/data/home";

describe("homepage content model", () => {
  it("contains the approved hero, capability, methodology, and system copy", () => {
    expect(homePage.hero.title).toBe("量化研究，从假设到系统化验证。");
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
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/home-data.test.ts
```

Expected:

1. FAIL because `src/data/home.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/home.ts` with a single exported object:

```ts
export const homePage = {
  hero: {
    title: "量化研究，从假设到系统化验证。",
    description:
      "WinqLab 专注于量化策略研究、交易系统构建与研究基础设施设计，以工程化方式组织数据、实验与执行。",
    supporting:
      "面向复杂市场问题，建立可迭代、可审查、可扩展的研究系统。",
    actions: [
      { label: "查看研究框架", href: "#methodology" },
      { label: "浏览系统结构", href: "#system-flow" },
    ],
  },
  capabilities: [
    { name: "Research", description: "..." },
    { name: "Data", description: "..." },
    { name: "Backtesting", description: "..." },
    { name: "Execution", description: "..." },
    { name: "Infrastructure", description: "..." },
  ],
  methodology: {
    title: "研究不是结论的堆叠，而是验证过程的设计。",
    steps: [
      "问题定义",
      "假设提出",
      "数据构建",
      "实验验证",
      "结果审查",
      "持续迭代",
    ],
  },
  researchThemes: [
    "趋势与动量类策略研究",
    "横截面与因子信号探索",
    "组合构建与风险约束设计",
    "执行效率与交易系统优化",
  ],
  systemFlow: [
    "市场数据",
    "数据处理",
    "特征 / 信号",
    "策略实验",
    "回测评估",
    "执行接口",
    "监控与复盘",
  ],
};
```

Fill in the `description` fields with the approved copy from the design doc rather than placeholder dots.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/home-data.test.ts
```

Expected:

1. PASS

**Step 5: Commit**

```bash
git add src/data/home.ts tests/home-data.test.ts
git commit -m "feat: add homepage content model"
```

### Task 4: Implement the homepage hero, capability, methodology, and research-theme sections

**Files:**
- Create: `src/components/sections/HeroSection.astro`
- Create: `src/components/sections/CapabilityGrid.astro`
- Create: `src/components/sections/MethodologySection.astro`
- Create: `src/components/sections/ResearchThemesSection.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/home-top-sections.test.ts`

**Step 1: Write the failing test**

```ts
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage top sections", () => {
  it("mounts the hero and core research sections on the homepage", () => {
    expect(existsSync("src/components/sections/HeroSection.astro")).toBe(true);
    expect(existsSync("src/components/sections/CapabilityGrid.astro")).toBe(true);
    expect(existsSync("src/components/sections/MethodologySection.astro")).toBe(true);
    expect(existsSync("src/components/sections/ResearchThemesSection.astro")).toBe(true);

    const page = readFileSync("src/pages/index.astro", "utf8");
    expect(page).toContain("HeroSection");
    expect(page).toContain("CapabilityGrid");
    expect(page).toContain("MethodologySection");
    expect(page).toContain("ResearchThemesSection");
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/home-top-sections.test.ts
```

Expected:

1. FAIL because the section component files do not exist yet.

**Step 3: Write minimal implementation**

Build these sections as reusable `.astro` components that receive content via props from `src/data/home.ts`.

Implementation requirements:

1. The hero must include the approved title, description, supporting line, and two anchor actions.
2. The hero visual should use grid, node, or path motifs rather than trading-chart clichés.
3. The capability grid should render five cards.
4. The methodology section should expose the `id="methodology"` anchor target.
5. The system should feel product-like but not sales-like.

Update `src/pages/index.astro` to import the content object and pass each subsection into the new components.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/home-top-sections.test.ts
bun run build
```

Expected:

1. The section test PASSes.
2. The build succeeds with the homepage mounted under the shared layout.

**Step 5: Commit**

```bash
git add src/components/sections/HeroSection.astro src/components/sections/CapabilityGrid.astro src/components/sections/MethodologySection.astro src/components/sections/ResearchThemesSection.astro src/pages/index.astro tests/home-top-sections.test.ts
git commit -m "feat: implement homepage top sections"
```

### Task 5: Implement the homepage system-flow, notes-preview, and contact-close sections

**Files:**
- Create: `src/components/sections/SystemFlowSection.astro`
- Create: `src/components/sections/NotesPreviewSection.astro`
- Create: `src/components/sections/ContactCloseSection.astro`
- Modify: `src/pages/index.astro`
- Test: `tests/home-bottom-sections.test.ts`

**Step 1: Write the failing test**

```ts
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("homepage lower sections", () => {
  it("mounts the system flow, notes preview, and contact close sections", () => {
    expect(existsSync("src/components/sections/SystemFlowSection.astro")).toBe(true);
    expect(existsSync("src/components/sections/NotesPreviewSection.astro")).toBe(true);
    expect(existsSync("src/components/sections/ContactCloseSection.astro")).toBe(true);

    const page = readFileSync("src/pages/index.astro", "utf8");
    expect(page).toContain("SystemFlowSection");
    expect(page).toContain("NotesPreviewSection");
    expect(page).toContain("ContactCloseSection");
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/home-bottom-sections.test.ts
```

Expected:

1. FAIL because the lower-half homepage sections do not exist yet.

**Step 3: Write minimal implementation**

Add the remaining homepage sections:

1. `SystemFlowSection.astro` should expose `id="system-flow"` and render the full chain from `市场数据` to `监控与复盘`.
2. `NotesPreviewSection.astro` should present `札记` as a future publication lane, not an empty apology page.
3. `ContactCloseSection.astro` should end the homepage with restrained collaboration language and no sales-style CTA.

Keep the notes preview honest:

1. show that content will be published gradually
2. avoid fake article dates
3. avoid fabricated metrics

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/home-bottom-sections.test.ts
bun run build
```

Expected:

1. The section test PASSes.
2. The homepage builds successfully with all planned sections in place.

**Step 5: Commit**

```bash
git add src/components/sections/SystemFlowSection.astro src/components/sections/NotesPreviewSection.astro src/components/sections/ContactCloseSection.astro src/pages/index.astro tests/home-bottom-sections.test.ts
git commit -m "feat: complete homepage information architecture"
```

### Task 6: Build the `研究` page

**Files:**
- Create: `src/data/research.ts`
- Create: `src/pages/research.astro`
- Test: `tests/research-page.test.ts`

**Step 1: Write the failing test**

```ts
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
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/research-page.test.ts
```

Expected:

1. FAIL because `src/data/research.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/research.ts` with four sections:

1. `研究原则`
2. `研究流程`
3. `当前关注主题`
4. `未来研究方向`

Then create `src/pages/research.astro` that:

1. uses `SiteLayout.astro`
2. imports `researchPage`
3. renders each section as structured content blocks, not a plain wall of text

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/research-page.test.ts
bun run build
```

Expected:

1. PASS
2. Build succeeds with `/research` generated.

**Step 5: Commit**

```bash
git add src/data/research.ts src/pages/research.astro tests/research-page.test.ts
git commit -m "feat: add research overview page"
```

### Task 7: Build the `系统` page

**Files:**
- Create: `src/data/system.ts`
- Create: `src/pages/system.astro`
- Test: `tests/system-page.test.ts`

**Step 1: Write the failing test**

```ts
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
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/system-page.test.ts
```

Expected:

1. FAIL because `src/data/system.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/system.ts` with:

1. page title and intro
2. four system layers
3. one architecture summary line

Then create `src/pages/system.astro` that presents the page as cards or panels rather than generic paragraphs.

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/system-page.test.ts
bun run build
```

Expected:

1. PASS
2. Build succeeds with `/system` generated.

**Step 5: Commit**

```bash
git add src/data/system.ts src/pages/system.astro tests/system-page.test.ts
git commit -m "feat: add system architecture page"
```

### Task 8: Build the `札记` page

**Files:**
- Create: `src/data/notes.ts`
- Create: `src/pages/notes.astro`
- Test: `tests/notes-page.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { notesPage } from "../src/data/notes";

describe("notes page data", () => {
  it("frames future notes around methods, systems, and experiments", () => {
    expect(notesPage.title).toBe("札记");
    expect(notesPage.tracks).toEqual([
      "研究方法",
      "系统设计",
      "实验记录",
    ]);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/notes-page.test.ts
```

Expected:

1. FAIL because `src/data/notes.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/notes.ts` with:

1. page title
2. short explanatory intro
3. the three content tracks

Then create `src/pages/notes.astro` that:

1. uses the shared layout
2. communicates that research records will be published gradually
3. feels intentional even with zero public entries

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/notes-page.test.ts
bun run build
```

Expected:

1. PASS
2. Build succeeds with `/notes` generated.

**Step 5: Commit**

```bash
git add src/data/notes.ts src/pages/notes.astro tests/notes-page.test.ts
git commit -m "feat: add notes landing page"
```

### Task 9: Build the `联系` page

**Files:**
- Create: `src/data/contact.ts`
- Create: `src/pages/contact.astro`
- Test: `tests/contact-page.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { contactPage } from "../src/data/contact";

describe("contact page data", () => {
  it("offers a restrained collaboration-oriented contact path", () => {
    expect(contactPage.title).toBe("联系");
    expect(contactPage.statement).toContain("欢迎建立联系");
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/contact-page.test.ts
```

Expected:

1. FAIL because `src/data/contact.ts` does not exist yet.

**Step 3: Write minimal implementation**

Create `src/data/contact.ts` with:

1. page title
2. a short contact statement
3. one primary contact method field
4. optional external profile links

Then create `src/pages/contact.astro` with:

1. a clean page intro
2. one main contact block
3. no sales form and no marketing copy

**Step 4: Run test to verify it passes**

Run:

```bash
bun run test tests/contact-page.test.ts
bun run build
```

Expected:

1. PASS
2. Build succeeds with `/contact` generated.

**Step 5: Commit**

```bash
git add src/data/contact.ts src/pages/contact.astro tests/contact-page.test.ts
git commit -m "feat: add contact page"
```

### Task 10: Add GitHub Pages deployment, custom-domain support, and final verification

**Files:**
- Create: `public/robots.txt`
- Create: `.github/workflows/deploy.yml`
- Create: `src/pages/404.astro`
- Test: `tests/deployment-files.test.ts`

**Step 1: Write the failing test**

```ts
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("deployment readiness", () => {
  it("includes custom-domain and GitHub Pages deployment files", () => {
    expect(existsSync(".github/workflows/deploy.yml")).toBe(true);
    expect(readFileSync(".github/workflows/deploy.yml", "utf8")).toContain("actions/deploy-pages");
    expect(existsSync("public/robots.txt")).toBe(true);
    expect(existsSync("src/pages/404.astro")).toBe(true);
  });
});
```

**Step 2: Run test to verify it fails**

Run:

```bash
bun run test tests/deployment-files.test.ts
```

Expected:

1. FAIL because the deployment files do not exist yet.

**Step 3: Write minimal implementation**

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /
```

Create `src/pages/404.astro` with brand-consistent copy and a return-to-home link.

Create `.github/workflows/deploy.yml` using the GitHub Pages flow:

1. checkout repository
2. configure pages
3. set up `bun`
4. install dependencies with `bun install --frozen-lockfile`
5. build the site with `bun run build`
6. upload `./dist`
7. deploy with `actions/deploy-pages`

Use a branch trigger on `main` and keep permissions limited to the standard Pages deployment set.

After the first successful deployment, finish the custom-domain setup in GitHub:

1. Open repository `Settings -> Pages`
2. Ensure the source is `GitHub Actions`
3. Set the custom domain to `winqlab.com`
4. Configure DNS records for the apex domain according to GitHub Pages guidance

**Step 4: Run verification**

Run:

```bash
bun run check
bun run test
bun run build
bun run preview -- --host 127.0.0.1 --port 4321
```

Manual checks:

1. Verify the homepage reads clearly on desktop and mobile.
2. Verify hero anchor links reach `#methodology` and `#system-flow`.
3. Verify no page contains returns, performance claims, or sales language.
4. Verify the generated `dist/` directory includes a sitemap file.
5. Verify GitHub repository Pages settings use `GitHub Actions` and custom domain `winqlab.com`.

Expected:

1. `astro check` passes.
2. All Vitest tests PASS.
3. Production build succeeds.
4. Preview serves the complete static site locally.

**Step 5: Commit**

```bash
git add .github/workflows/deploy.yml public/robots.txt src/pages/404.astro
git add src tests astro.config.mjs package.json bun.lock
git commit -m "feat: finalize astro deployment for winqlab site"
```

## Notes for the Implementer

1. Follow `@test-driven-development` for each task after scaffold setup.
2. Keep brand copy in `src/data/*.ts`, not scattered through templates.
3. Prefer `.astro` components over framework islands in `V1`.
4. Do not add React unless a section truly needs client-side state or richer interactivity.
5. If limited dynamic behavior is needed later, evaluate an Astro adapter before considering a framework migration.
6. If the site evolves into a server-heavy product, reassess whether `Next.js` or another server-centric framework is warranted.
7. Before declaring success, follow `@verification-before-completion`.
