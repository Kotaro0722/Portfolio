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
import { HistoryTextType, TimeLineEventType } from ".";

type LayoutProps = {
  historyText: HistoryTextType[];
  timeLineEvent: TimeLineEventType[];
};

export const Layout = ({ historyText, timeLineEvent }: LayoutProps) => {
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
