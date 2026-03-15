# WinqLab Website Design

**Date:** 2026-03-15
**Status:** Approved

## Summary

`WinqLab` will be a Chinese-language brand website for a quant research lab. It should feel like a modern technology product while communicating the discipline, structure, and credibility of a research system. The site is not a lead-generation funnel, a performance marketing page, or a personal homepage.

The website's job is to answer three questions quickly:

1. What is `WinqLab` researching?
2. How does `WinqLab` turn ideas into structured research and systems?
3. Why should peers and potential partners take `WinqLab` seriously?

## Goals

1. Establish `WinqLab` as a clear and memorable quant research brand.
2. Show a structured view of research, data, validation, execution, and infrastructure.
3. Communicate professionalism without exposing returns or sensitive strategy details.
4. Create a foundation that can later grow into a notes-driven research site.

## Non-Goals

1. No client acquisition funnel.
2. No public performance reporting, return curves, or strategy disclosure.
3. No heavy emphasis on a personal story or founder narrative.
4. No CMS, login, dashboard, or operational tooling in `V1`.
5. No bilingual support in the first release.

## Audience

Primary audience:

1. Peers in quant, trading, and technical research circles.
2. Potential partners who care about rigor, process, and systems.

Secondary audience:

1. None in `V1`. The site should not optimize for general retail readers.

## Positioning

Preferred brand framing:

1. `WinqLab` is a quant research lab.
2. The brand should not foreground that it is "personal".
3. The public posture should feel product-like and system-oriented, not sales-driven.

One-line positioning:

`WinqLab is a research lab focused on quant strategy research, trading system design, and research infrastructure.`

Working homepage headline:

`量化研究，从假设到系统化验证。`

Working homepage subheadline:

`WinqLab 专注于量化策略研究、交易系统构建与研究基础设施设计，以工程化方式组织数据、实验与执行。`

## Content Boundaries

Allowed:

1. Research themes and methods.
2. Systems thinking and workflow design.
3. Technology and infrastructure framing.
4. Placeholder notes and future publication lanes.

Avoid:

1. Any profit promise or marketing claims.
2. Return charts, drawdowns, Sharpe, or performance snapshots.
3. Specific alpha logic, sensitive implementation details, or strategy leakage.
4. Consulting-style calls to action.

## Brand Tone

The tone should be:

1. Rational
2. Precise
3. Contemporary
4. Quietly confident
5. Technically literate

The tone should not be:

1. Grandiose
2. Sales-heavy
3. Fund-marketing-like
4. Bloggy or diary-like

## Visual Direction

Target feel:

1. Technology product exterior
2. Research institution interior

Visual principles:

1. Use a dark graphite, cool gray, and off-white base palette.
2. Use cobalt blue or cyan as the primary accent.
3. Reserve a small amount of neon green for system highlights or status points.
4. Prefer grids, nodes, paths, structured diagrams, and signal-like geometry over candlestick imagery.
5. Keep animation purposeful: reveal modules, trace flows, and stage sections with restraint.

Typography direction:

1. Use a modern sans-serif setup that works well for Chinese content.
2. Keep headings more assertive than the body copy.
3. Support a product-like visual rhythm rather than a default blog look.

## Information Architecture

Primary navigation:

1. `首页`
2. `研究`
3. `系统`
4. `札记`
5. `联系`

Primary CTA:

1. `查看研究框架`

The top navigation should remain restrained. Avoid any "contact sales" or high-pressure conversion language.

## Homepage Structure

### 1. Hero

Purpose:

1. Explain what `WinqLab` is in a few seconds.
2. Establish the system-oriented brand feel immediately.

Content:

1. Headline
2. Subheadline
3. Two low-pressure actions: `查看研究框架`, `浏览系统结构`
4. Right-side visual built from data-network or systems-architecture motifs

### 2. Capability Modules

Purpose:

1. Show the core parts of the research system.

Suggested modules:

1. `Research`
2. `Data`
3. `Backtesting`
4. `Execution`
5. `Infrastructure`

### 3. Methodology

Purpose:

1. Show how research progresses.
2. Build credibility through process instead of outcomes.

Suggested flow:

`问题定义 -> 假设提出 -> 数据构建 -> 实验验证 -> 结果审查 -> 持续迭代`

### 4. Research Themes

Purpose:

1. Show what `WinqLab` studies without oversharing.

Suggested topics:

1. 趋势与动量类策略研究
2. 横截面与因子信号探索
3. 组合构建与风险约束设计
4. 执行效率与交易系统优化

### 5. System Flow

Purpose:

1. Translate the brand into a concrete end-to-end system view.

Suggested chain:

`市场数据 -> 数据处理 -> 特征/信号 -> 策略实验 -> 回测评估 -> 执行接口 -> 监控与复盘`

### 6. Notes Preview

Purpose:

1. Show that the site is built to grow.
2. Reserve space for future research publications.

Suggested framing:

`围绕方法、系统与实验的研究记录将逐步公开。`

### 7. Contact Footer

Purpose:

1. End the page cleanly.
2. Offer a way to connect without turning the page into a funnel.

## Page-by-Page Scope

### 首页

Responsibilities:

1. Brand positioning
2. Methods overview
3. Capability summary
4. Research theme summary
5. System-flow overview
6. Notes preview
7. Contact entry

### 研究

Responsibilities:

1. Explain research principles
2. Describe the research workflow
3. Present current themes
4. Reserve room for future directions

### 系统

Responsibilities:

1. Explain the data layer
2. Explain the research and validation layer
3. Explain the execution layer
4. Explain monitoring and iteration
5. Show how the modules fit together

### 札记

Responsibilities:

1. Provide a clear placeholder for future public notes
2. Frame upcoming content as methods, systems, and experiments

### 联系

Responsibilities:

1. Keep a low-friction contact path
2. Stay aligned with the restrained brand tone

## Initial Copy Framework

Homepage supporting line:

`面向复杂市场问题，建立可迭代、可审查、可扩展的研究系统。`

Methodology section lead:

`研究不是结论的堆叠，而是验证过程的设计。`

Methodology section body:

`WinqLab 以问题定义、假设提出、实验验证、结果审查与迭代优化为基础研究路径，强调研究过程的结构化与系统化，而非对短期结果的追逐。`

System-flow lead:

`从市场数据到策略实验，再到执行与监控，WinqLab 将量化研究视为一条连续运转的系统链路。`

Contact line:

`如果你关注量化研究、系统设计或相关协作议题，欢迎建立联系。`

## Technical Recommendation

Recommended stack:

1. `Astro`
2. `TypeScript`
3. `Tailwind CSS`
4. Local content files for the initial content model
5. Static deployment on `GitHub Pages`

Reasons:

1. Strong fit for a static, content-driven brand site
2. Ships very little client-side JavaScript by default, which suits a polished research homepage
3. Works cleanly with `GitHub Pages` and a custom domain such as `winqlab.com`
4. Keeps future options open for content collections, framework islands, or a later migration if the site becomes application-like

## V1 Scope

Ship in the first release:

1. A complete homepage
2. Four secondary pages: `研究`, `系统`, `札记`, `联系`
3. A unified visual language
4. Reusable content sections
5. Seed copy generated from the approved framing

Defer until later:

1. Public research archive with many entries
2. English language support
3. Performance dashboards
4. Interactive analytics tools
5. Backend CMS

## Success Criteria

The `V1` site is successful if:

1. A technically literate visitor can understand what `WinqLab` is within one screen.
2. The site feels complete and intentional even before a large body of notes exists.
3. The visual language feels differentiated from generic fund, blog, and SaaS templates.
4. The content communicates structure and credibility without using performance marketing.

## Future Expansion

After `V1`, expand in this order:

1. Publish research notes
2. Add topic-specific deep-dive pages
3. Add public project or repository links if appropriate
4. Add English support if audience needs broaden
5. If limited dynamic functionality is needed, first evaluate adding an Astro adapter while keeping most pages static
6. If the site evolves into a product-like application with significant server-side needs, evaluate migrating to a server-centric framework such as `Next.js`
7. Revisit partner-facing content only if external collaboration becomes a real goal
