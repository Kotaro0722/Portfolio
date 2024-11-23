import { ProjectPartsType } from "../../components/project";
import { Layout } from "./layout";

export const Internship = () => {
  const internshipText: ProjectPartsType[] = [
    {
      title: "株式会社Shinonome",
      date: new Date(2023, 9, 1),
      abstract:
        "テックコミュニティ「PlayGround」を運営している企業様から提供していただいた開発案件に参加しております。",
      contentLink: "https://shinonome.com/",
      skill: ["next-js", "react", "typescript", "material-ui", "docker"],
    },
    {
      title: "楽天グループ株式会社",
      date: new Date(2024, 7, 1),
      abstract:
        "2024年夏季インターンシップに参加しました。インターンシップでは楽天の提供する既存のサービスを利用した新しい防災アプリケーションの開発を行い、最終プレゼンを英語で行いました。",
      img: "",
      skill: ["react", "typescript", "chakra-ui"],
    },
    {
      title: "株式会社エムティーアイ",
      date: new Date(2024, 7, 1),
      abstract:
        "2024年夏季インターンシップに参加しました。インターンシップではFE・BE・マーケティングの講座を通して新規ヘルケアサービスの企画・開発を行いました。",
      contentLink: "https://shinonome.com/",
      img: "",
      skill: ["vue", "javascript", "aws"],
    },
  ];
  return <Layout internshipText={internshipText} />;
};
