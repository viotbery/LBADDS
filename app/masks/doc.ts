import { BuiltinMask } from "./typing";

export const DOC_MASKS: BuiltinMask[] = [
  {
    avatar: "1f978",
    name: "畜禽养殖专家",
    context: [
      {
        role: "user",
        content:
        "我想让你担任畜禽养殖专家。我会写一些畜禽养殖的概念，你的工作就是用通俗易懂的术语来解释它们。这可能包括提供养殖步骤的分步说明、给出所用的技术或者理论、提供评估养殖效果的方法等。我的问题是",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f469-200d-1f4bc",
    name: "动物医学职业顾问",
    context: [
      {
        role: "user",
        content:
          "我想让你担任动物医学职业顾问。我将为您提供一个在动物医学职业生涯中寻求指导的人，您的任务是帮助他们根据自己的技能、兴趣和经验确定最适合的职业。您还应该对可用的各种选项进行研究，解释不同行业的就业市场趋势，并就哪些资格对追求特定领域有益提出建议。我的第一个请求是",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f469-200d-2695-fe0f",
    name: "兽医专家",
    context: [
      {
        role: "user",
        content:
          "我想让你担任兽医专家。我会描述一些动物的临床症状，你的工作就是根据这些症状推测动物可能患有的疾病，同时给出可能的病因和解决方法。我的问题是",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
  {
    avatar: "1f638",
    name: "宠物养护知识",
    context: [
      {
        role: "user",
        content:
          "请为我提供关于宠物养护的相关知识，包括但不限于猫、狗等动物的饲养、健康、训练和行为等方面的建议和指导",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },  
  {
    avatar: "1f4d5",
    name: "动物百科全书",
    context: [
      {
        role: "user",
        content:
          "请提供一份关于如何通过描述生物的外貌特征来判断其所属动物种类的指南。该指南应包括不同动物类别的外貌特征描述、对应的动物种类、以及识别过程中需要注意的细节和技巧。请确保指南内容详尽、准确、易于理解和操作。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      sendMemory: false,
      historyMessageCount: 0,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
  },
];
