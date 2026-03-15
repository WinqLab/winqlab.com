import { homePage } from "./home";

export const researchPage = {
  title: "研究",
  intro:
    "WinqLab 以问题定义、结构化验证和持续迭代为主线组织量化研究，而不是围绕短期结果堆砌结论。",
  sections: [
    {
      title: "研究原则",
      items: [
        "围绕可定义、可拆解的问题展开，而不是围绕结论倒推。",
        "优先建立可复核的研究过程，保留实验上下文与约束。",
        "在方法、数据和系统实现之间维持一致的审查标准。",
      ],
    },
    {
      title: "研究流程",
      items: homePage.methodology.steps,
    },
    {
      title: "当前关注主题",
      items: homePage.researchThemes,
    },
    {
      title: "未来研究方向",
      items: [
        "扩展跨周期研究主题之间的关联性建模。",
        "完善组合约束与执行反馈之间的联动机制。",
        "持续整理便于理解的研究记录与系统设计摘要。",
      ],
    },
  ],
};
