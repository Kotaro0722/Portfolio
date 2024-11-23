import { ProjectPartsType } from "../../components/project";
import { Layout } from "./layout";

export const Project = () => {
  const projectText: ProjectPartsType[] = [
    {
      title: "訪問診療用ツールVitaLink(バイタリンク)",
      date: new Date(2023, 9, 1),
      abstract:
        "2年次の授業「地域連携課題演習」で発足したプロジェクトです。現在紙ベースで行われている業務をデジタル化しました。",
      contentLink: "https://vita-link.vercel.app/",
      img: "img/VitaLink.svg",
      github: "https://github.com/Kotaro0722/VitaLinkHistory",
      skill: ["next-js", "javascript", "firebase", "vercel", "material-ui"],
    },
    {
      title: "借金管理Discord Bot",
      date: new Date(2024, 1, 1),
      abstract:
        "友人との金銭のやり取りを管理するDiscordのBotです。借金の登録・確認・返済がDiscordのメッセージを介して行えます。",
      contentLink: "",
      img: "img/discord.svg",
      github: "https://github.com/Kotaro0722/DebtPrompt",
      skill: ["python", "discord"],
    },
    {
      title: "ポートフォリオサイト",
      date: new Date(2024, 10, 1),
      abstract:
        "現在ご覧になっているポートフォリオサイトです。自己紹介用に作成しました。",
      contentLink: "",
      img: "img/portfolio.png",
      github: "https://github.com/Kotaro0722/Portfolio",
      skill: [
        "react",
        "typescript",
        "material-ui",
        "styled-components",
        "vercel",
      ],
    },
    {
      title: "課題管理Discord Bot",
      date: new Date(2024, 3, 1),
      abstract:
        "大学の課題の提出を管理するDiscordのBotです。未提出の場合はリマインドが行われます。",
      contentLink: "",
      img: "img/discord.svg",
      github: "https://github.com/Kotaro0722/TaskManager",
      skill: ["python", "discord", "Docker"],
    },
    {
      title: "諏訪RPGプロジェクト",
      date: new Date(2024, 3, 1),
      abstract:
        "諏訪地域をモデルとしたご当地RPGを開発し地域振興に貢献することを目的としたプロジェクトです。",
      contentLink: "",
      img: "/img/suwarpg.png",
      github: "",
      skill: ["Docker", "gas", "react", "typescript", "vercel"],
    },
    {
      title: "借金管理 for Web",
      date: new Date(2024, 9, 1),
      abstract:
        "DiscordのBotで実装していた借金管理のWeb版です。Discord版では実装できなかった機能を実装予定です。",
      contentLink: "",
      img: "img/debtWeb.png",
      github: "https://github.com/Kotaro0722/DebtManagementForWeb",
      skill: [
        "react",
        "typescript",
        "django",
        "Docker",
        "styled-components",
        "material-ui",
        "mysql",
        "discord",
        "vercel",
      ],
    },
  ];
  return <Layout projectText={projectText} />;
};
