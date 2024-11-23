import { Layout } from "./layout";

export type HistoryTextType = {
  year: string;
  content: string;
};

export type TimeLineEventType = {
  at: Date;
  atEnd?: Date;
  help: string;
  icon?: string;
  title: string;
  content: string;
  link?: string;
  importance?: "primary" | "secondary";
};

export const Profile = () => {
  const historyText: HistoryTextType[] = [
    { year: "2022年3月", content: "静岡市立高等学校 卒業" },
    { year: "2022年4月", content: "公立諏訪東京理科大学 入学" },
    { year: "2026年4月", content: "公立諏訪東京理科大学 卒業見込み" },
  ];

  const timeLineEvent: TimeLineEventType[] = [
    {
      at: new Date(2017, 0, 1),
      help: "中学2年",
      icon: "https://img.icons8.com/ios/50/ms-excel.png",
      title: "中学時代の活動",
      content: "書籍でVBAを使ったExcelマクロについての学習",
    },
    {
      at: new Date(2019, 3, 1),
      atEnd: new Date(2021, 5, 1),
      icon: "https://img.icons8.com/ios/50/unity.png",
      help: "高校1年~高校3年",
      title: "高校時代の活動",
      content: "高校での部活動でUnity, C#を用いたゲームの開発",
    },
    {
      at: new Date(2022, 3, 1),
      help: "大学1年",
      icon: "/img/sus.png",
      title: "公立諏訪東京理科大学に入学",
      content: "ソフトウェアとハードウェアの両方を深く学ぶために本学に進学",
    },
    {
      at: new Date(2022, 5, 1),
      help: "大学1年",
      icon: "https://img.icons8.com/dotty/80/people-working-together.png",
      title: "PlayGroundに参加",
      content: "実践的な技術を学ぶため「PlayGround」に参加",
      link: "aa",
      importance: "primary",
    },
    {
      at: new Date(2023, 9, 1),
      atEnd: new Date(2024, 12, 1),
      help: "大学2年",
      icon: "https://img.icons8.com/ios-glyphs/30/react.png",
      title: "案件に参加",
      content: "PlayGroundが提供する開発案件に参加、FE開発を行う",
      importance: "primary",
    },
    {
      at: new Date(2023, 10, 1),
      atEnd: new Date(2024, 1, 1),
      help: "大学2年",
      icon: "https://img.icons8.com/ios/50/task.png",
      title: "地域連携課題演習",
      content: "訪問診療の課題を解決するサービスVitaLinkの企画・開発",
      importance: "primary",
    },
    {
      at: new Date(2024, 1, 1),
      help: "大学2年",
      title: "借金管理 Bot 開発",
      icon: "https://img.icons8.com/ios/50/discord-logo--v1.png",
      content: "友人との借金を管理するためのbotの開発",
      importance: "secondary",
    },
    {
      at: new Date(2024, 4, 1),
      atEnd: new Date(2024, 7, 1),
      help: "大学3年",
      icon: "https://img.icons8.com/ios/50/task.png",
      title: "VitaLinkの追加開発",
      content: "VitaLinkを実際の現場で使っていただくための追加の開発",
      importance: "secondary",
    },
    {
      at: new Date(2024, 4, 1),
      help: "大学3年",
      icon: "https://img.icons8.com/ios/50/discord-logo--v1.png",
      title: "課題管理 Bot 開発",
      content: "課題を提出したかを管理するbotの開発",
    },
    {
      at: new Date(2024, 7, 1),
      help: "大学3年",
      title: "夏インターンシップの参加",
      icon: "https://img.icons8.com/ios/50/programming.png",
      content: "楽天グループ株式会社・株式会社エムティーアイ",
    },
  ];

  return <Layout historyText={historyText} timeLineEvent={timeLineEvent} />;
};
