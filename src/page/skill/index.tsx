import { Container, Grid2, Typography } from "@mui/material";
import { SkillParts, SkillPartsType } from "../../components/skill";

export const Skill = () => {
  const skillText: SkillPartsType[] = [
    {
      icons: ["img/react.svg"],
      title: "React",
      master: 3,
      content: `TypeScriptとともにPlayGroundの案件や個人・チーム開発のフロントエンド開発で使用してきました。
        useStateやuseEffectといった基本的なフックは使いこなせるようになりましたが、
        カスタムフックの作成やレンダリングを考慮したコーディングなど解決すべき課題は残っていると感じています。`,
    },
    {
      icons: ["img/javascript.svg", "img/typescript.svg"],
      title: "JavaScript・TypeScript",
      master: 3,
      content: `主にTypeScriptを使用しています。ReactとともにPlayGroundでの案件や個人・チーム開発のフロントエンドで使用してきました。
        ライブラリ等に依存した型を利用する際は調査しながらの実装となり時間がかかってしまうのが難点だと感じています。`,
    },
    {
      icons: ["img/python.svg"],
      title: "Python",
      master: 3,
      content: `DiscordのBotやWebのバックエンド系の開発で使用してきました。
      for文より高速で簡潔なリスト内包表記を使いこなせるようになりたいです。`,
    },
    {
      icons: ["img/material-ui.svg"],
      title: "Material-UI",
      master: 3,
      content: `Reactを用いたフロントエンド開発の際に主要なUIコンポーネントとして使用しています。
      種類が豊富でそのままでも十分ですが、細かい修正や最適なコンポーネントを探すのに苦労しています。`,
    },
    {
      icons: ["img/git.svg", "img/github.svg"],
      title: "Git・GitHub",
      master: 3,
      content: `あらゆるプロジェクトのソース管理ツールとして使用しています。
      基本的にはVSCodeのGUI上での操作ですが、CLIでの操作も行えます。
      より多くのコマンドを使用できるように努めて参ります。`,
    },
    {
      icons: ["img/styled-components.svg"],
      title: "styled-components",
      master: 3,
      content: `Material-UIでは用意されていなかったコンポーネントを作成する際に使用しています。`,
    },
    {
      icons: ["img/html.svg", "img/css.svg"],
      title: "HTML・CSS",
      master: 2,
      content: `直接.htmlや.cssを書く機会はほとんどありませんが、ReactでのUI部分作成で主に使用しています。
      cssを用いたアニメーションの作成や複雑なデザインを実現できるようになりたいです。`,
    },
    {
      icons: ["img/mysql.svg"],
      title: "MySQL",
      master: 2,
      content: `授業内や個人開発の際のSQLとして使用しています。`,
    },
    {
      icons: ["img/next-js.svg"],
      title: "Next.js",
      master: 2,
      content: `VitaLink開発の際に使用しました。
      React以外の要素としてはルーティングのみに留まってしまったので、より詳細を調べ便利な部分を使っていきたいです。`,
    },
    {
      icons: ["img/flask.svg"],
      title: "Flask",
      master: 2,
      content: `授業内でのWebアプリケーション作成に使用しました。
      小型で軽量であることを活かして小規模開発に使用しています。`,
    },
    {
      icons: ["img/docker.svg"],
      title: "Docker",
      master: 2,
      content: `授業内や個人開発の際に開発環境・本番環境として使用しています。
      Webの情報をもとに学習したため、より正確な知識を付けていきたいです。`,
    },
    {
      icons: ["img/django.svg"],
      title: "Django・DRF",
      master: 2,
      content: `Webアプリケーション作成やAPI開発に使用しています。
      主にAPI開発に使用しており、大規模開発に慣れることを目標として学習を行っております。`,
    },
    {
      icons: ["img/firebase.svg"],
      title: "Firebase",
      master: 2,
      content: `VitaLink開発の際のバックエンド系の処理に使用しました。
      他の方に助けていただいた認証部分や自作APIを自分でも行えるようになりたいです。`,
    },
    {
      icons: ["img/c.svg", "img/c++.svg", "img/java.svg"],
      title: "C・C++・Java・php",
      master: 1,
      content: `大学の授業で学習しました。`,
    },
  ];
  return (
    <Container>
      <Grid2 spacing={4} container p={3}>
        {skillText.map((skill, index) => (
          <Grid2 size={4} key={index}>
            <SkillParts
              icons={skill.icons}
              title={skill.title}
              master={skill.master}
              content={skill.content}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
