import { ProjectPartsType } from "../../components/project";
import { Layout } from "./layout";

export const Community = () => {
  const communityText: ProjectPartsType[] = [
    {
      title: "PlayGround",
      date: new Date(2022, 3, 1),
      abstract:
        "大学1年次から参加し、Webの技術を勉強しながら実際の開発案件でよりスキルを磨いています。フロントエンドコースは修了済みで現在はバックエンドコースを受講しています。",
      contentLink: "https://playground-universe.com/",
      skill: ["react", "typescript", "django"],
    },
  ];
  return <Layout communityText={communityText} />;
};
