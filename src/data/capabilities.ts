export type CapabilitySlug = "data" | "research" | "execution" | "review" | "iteration";

export interface Capability {
  slug: CapabilitySlug;
  order: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  statement: string;
  focus: string[];
  details: {
    title: string;
    body: string;
  }[];
}

export const capabilities: Capability[] = [
  {
    slug: "data",
    order: "01",
    title: "数据",
    shortTitle: "数据",
    subtitle: "让市场输入先变得可信。",
    summary:
      "数据不是仓库里的原料，而是研究系统的第一层判断。WinQ Lab 关注数据采集、清洗、对齐与质量审查，让每一次实验都有可追溯的输入基础。",
    statement:
      "先把噪声、缺口、错位和异常暴露出来，再讨论模型、信号和收益。",
    focus: ["采集路径", "清洗规则", "时间对齐", "质量审查"],
    details: [
      {
        title: "输入定义",
        body: "明确每类数据进入系统的边界、频率、来源与用途，减少后续实验中的隐性假设。",
      },
      {
        title: "一致性检查",
        body: "围绕时间、标的、字段与单位建立检查规则，让异常先被发现，而不是在回测结果里被动暴露。",
      },
      {
        title: "研究就绪",
        body: "把原始市场输入整理成可复用、可审查、可重复生成的研究数据层。",
      },
    ],
  },
  {
    slug: "research",
    order: "02",
    title: "研究",
    shortTitle: "研究",
    subtitle: "把观察压缩成可验证的假设。",
    summary:
      "研究不是结论的陈列，而是问题、假设、实验与审查的连续过程。WinQ Lab 用结构化路径验证信号是否可靠，避免被单次结果说服。",
    statement:
      "每个研究结论都需要回答：它解释了什么，依赖什么，在哪些条件下会失效。",
    focus: ["问题定义", "假设提出", "实验设计", "结果审查"],
    details: [
      {
        title: "问题优先",
        body: "先定义研究问题和市场语境，再决定数据、窗口、特征和验证方式。",
      },
      {
        title: "实验纪律",
        body: "把参数、样本、版本与结果保留在同一条上下文里，降低重复验证和误判成本。",
      },
      {
        title: "拒绝过拟合叙事",
        body: "关注稳健性、迁移性与衰减节奏，而不是为漂亮结果补写故事。",
      },
    ],
  },
  {
    slug: "execution",
    order: "03",
    title: "执行",
    shortTitle: "执行",
    subtitle: "让研究结果进入真实约束。",
    summary:
      "执行层负责把研究输出转化为可运行的交易流程。这里关注信号生成、约束处理、指令链路与系统稳定性，而不是停留在纸面结论。",
    statement:
      "没有执行约束的研究只是草图；能被系统稳定承载的结论才值得继续迭代。",
    focus: ["信号生成", "约束处理", "订单链路", "稳定运行"],
    details: [
      {
        title: "从信号到动作",
        body: "把研究信号转换为明确的执行输入，处理频率、阈值、组合与风控约束。",
      },
      {
        title: "链路可观测",
        body: "执行过程需要能被记录、检查与复现，关键状态不能只存在于临时日志里。",
      },
      {
        title: "稳定性优先",
        body: "在真实环境里，延迟、失败、重试和异常处理与模型本身同样重要。",
      },
    ],
  },
  {
    slug: "review",
    order: "04",
    title: "复盘",
    shortTitle: "复盘",
    subtitle: "把结果重新拆回原因。",
    summary:
      "复盘不是给结果做注释，而是把执行表现、市场环境、系统状态与研究假设重新对齐。它决定哪些结论应该保留，哪些必须重做。",
    statement:
      "复盘的目标不是解释过去，而是减少下一次判断里的盲区。",
    focus: ["结果归因", "偏差识别", "异常回看", "实验记录"],
    details: [
      {
        title: "归因",
        body: "区分信号贡献、市场状态、组合暴露和执行损耗，避免把多个因素混成一个判断。",
      },
      {
        title: "异常回看",
        body: "把偏离预期的样本、交易和系统事件拉出来单独审查，而不是让均值掩盖问题。",
      },
      {
        title: "记录可用",
        body: "复盘输出要能回到研究队列，形成下一轮实验的输入，而不是停在总结文本里。",
      },
    ],
  },
  {
    slug: "iteration",
    order: "05",
    title: "持续迭代",
    shortTitle: "迭代",
    subtitle: "让反馈成为系统的一部分。",
    summary:
      "持续迭代把数据、研究、执行与复盘连成闭环。WinQ Lab 关注的是长期可演进的系统，而不是一次性的策略产出。",
    statement:
      "真正的能力不在某个单点模型，而在系统吸收反馈、修正判断和继续前进的速度。",
    focus: ["研究队列", "参数更新", "基础设施改进", "长期演进"],
    details: [
      {
        title: "反馈入队",
        body: "把复盘中发现的问题重新转成研究任务，保持系统有明确的下一步。",
      },
      {
        title: "小步更新",
        body: "用可验证的小改动替代大而模糊的重构，让系统变化可以被观察和回滚。",
      },
      {
        title: "长期结构",
        body: "基础设施、实验记录和执行链路一起演进，支撑更长周期的研究积累。",
      },
    ],
  },
];

export const capabilityLoop = capabilities.map((item) => item.shortTitle);

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((item) => item.slug === slug);
}
