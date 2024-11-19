import styled from "@emotion/styled";
import { Box, Container, Grid2, Paper, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from "@mui/lab";
import { date2YearMonthString } from "../../utils/dateFormatter";

type HistoryTextType = {
  year: string;
  content: string;
};

type TimeLineEventType = {
  at: Date;
  atEnd?: Date;
  help: string;
  icon?: string;
  title: string;
  content: string;
  link?: string;
  importance?: "primary" | "secondary";
};

export const Layout = () => {
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

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Paper
        sx={{
          border: "1px solid black",
          borderRadius: 5,
          p: 2,
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <img
              src="/img/face.JPG"
              alt="face"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </Grid2>
          <Grid2 size={8} container>
            <Typography sx={{ fontSize: "30px" }}>
              <img
                src="/img/sus.png"
                alt="sus"
                style={{
                  transform: "scale(0.5)",
                  transformOrigin: "right bottom",
                }}
              />{" "}
              公立諏訪東京理科大学 情報応用工学科
            </Typography>
            <NameTypography sx={{ width: "100%", textAlign: "center" }}>
              <ruby>
                田中<rt>たなか</rt>
                <br />
                光太郎<rt>こうたろう</rt>
              </ruby>
            </NameTypography>
            <Box
              component="h2"
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              学歴
              {historyText.map((history, index) => (
                <Typography key={index} sx={{ ml: "20px" }}>
                  {history.year} {history.content}
                </Typography>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
      <Container>
        <Typography component="h2" fontSize={70} textAlign="center" my={4}>
          エンジニアとしてのこれまで
        </Typography>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.3,
            },
          }}
        >
          {timeLineEvent.map((timeline, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography>
                  {date2YearMonthString(timeline.at)}
                  {timeline.atEnd &&
                    `～${date2YearMonthString(timeline.atEnd)}`}
                </Typography>
                <Typography>{timeline.help}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={timeline.importance ?? "grey"}>
                  {timeline.icon && (
                    <img
                      src={timeline.icon}
                      alt="icon"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  cursor: timeline.link ? "pointer" : "default",
                  width: "fit-content",
                  // ":hover": {
                  //   boxShadow: timeline.link && "grey 10px 10px 10px",
                  //   border: timeline.link && "solid 1px grey ",
                  //   borderRadius: timeline.link && "10px",
                  // },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontSize="25px"
                  width="fit-content"
                >
                  {timeline.title}
                </Typography>
                <Typography width="fit-content">{timeline.content}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Container>
  );
};

const NameTypography = styled(Typography)({
  ruby: {
    fontSize: "90px",
  },
  rt: {
    fontSize: "30px",
    textAlign: "center",
  },
});
