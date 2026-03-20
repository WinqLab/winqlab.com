# WinqLab

WinqLab 是一个围绕量化研究、交易系统设计与研究基础设施构建的静态网站项目。站点以工程化视角组织内容，聚焦从研究假设、实验验证到执行与复盘的完整链路，用于展示研究方法、系统结构、研究札记与对外联系信息。

## 技术栈

- Astro 6
- Tailwind CSS 4
- TypeScript
- Vitest

## 页面内容

- 首页：概览研究方法、能力结构与系统流程
- 研究：介绍研究原则、研究流程与当前关注主题
- 系统：说明数据、验证、执行与监控等系统分层
- 札记：整理研究方法、系统设计与实验记录
- 联系：提供对外联系入口

## 本地开发

```sh
bun install
bun dev
```

默认开发地址为 `http://localhost:4321`。

## 常用命令

| Command | Action |
| :-- | :-- |
| `bun dev` | 启动本地开发服务器 |
| `bun build` | 构建生产版本到 `dist/` |
| `bun preview` | 预览构建结果 |
| `bun check` | 运行 Astro 类型检查 |
| `bun test` | 运行 Vitest 测试 |
