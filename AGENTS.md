# WinQ Agent Notes

## Project Direction

This branch is a full redesign of `winqlab.com`. Do not restore the old
`系统 / 札记 / 联系` information architecture or the previous dark grid,
cyan-glow, glass-card visual style.

The site should stay focused on five core capabilities:

1. 数据
2. 研究
3. 执行
4. 复盘
5. 持续迭代

The homepage presents these capabilities as one loop. The capability subpages
are generated from `src/data/capabilities.ts` through the dynamic route
`src/pages/[capability].astro`.

## Design Reference

The redesign follows an Apple-like minimal product-site direction:

- White top navigation, visually distinct from the `#f5f5f7` content background.
- Large, restrained typography with tight line-height.
- Strong whitespace and simple section rhythm.
- One chromatic accent only: Apple blue (`#0071e3`) for links and focus states.
- Avoid gradients, glow effects, decorative grids, heavy borders, and excessive cards.
- Dark sections are allowed, but should not appear in the first viewport during
  page navigation. Keep capability page heroes at full first-screen height so
  navigation does not flash black.

The external design skill used for this redesign was:

- GitHub: `joeseesun/qiaomu-design-advisor`
- Skill name: `qiaomu-design-advisor`
- Relevant reference: `references/design-systems/apple/DESIGN.md`

If future agents need to continue design work, use that repository as the
design-system reference. It does not need to be installed for one-off use; read
the repository `SKILL.md` and Apple `DESIGN.md` directly if needed.

## Implementation Notes

Key files:

- `src/data/capabilities.ts`: source of truth for the five capability pages.
- `src/data/site.ts`: metadata and top navigation.
- `src/components/sections/HomeHero.astro`: homepage hero.
- `src/components/sections/CapabilityLoopSection.astro`: five-part loop section.
- `src/components/sections/CapabilityFeatureSection.astro`: homepage capability sections.
- `src/components/CapabilityPage.astro`: shared capability page template.
- `src/styles/global.css`: visual system and responsive behavior.
- `astro.config.mjs`: Astro config. Dev toolbar is disabled to avoid local-only
  black UI flashes during navigation previews.

This is a simple static site. Do not add a test framework unless the project
grows enough to justify it. For normal changes, verify with:

```bash
npm run check
npm run build
```

For visual changes, also inspect the site in a browser at desktop and mobile
widths, especially:

- `/`
- `/data`
- `/review`

## Style Constraints

- Keep UI copy concise and sober.
- Do not use sales-heavy CTA language.
- Do not expose strategy details, returns, performance metrics, or sensitive
  implementation details.
- Prefer editing existing focused files over adding new abstractions.
- Keep route structure simple: `/`, `/data`, `/research`, `/execution`,
  `/review`, `/iteration`, `/404`.
