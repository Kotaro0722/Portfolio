import styled from "@emotion/styled";
import { Box, Container, Grid2, Paper, Typography } from "@mui/material";

type HistoryTextType = {
  year: string;
  content: string;
};

export const Layout = () => {
  const historyText: HistoryTextType[] = [
    { year: "2022年3月", content: "静岡市立高等学校 卒業" },
    { year: "2022年4月", content: "公立諏訪東京理科大学 入学" },
    { year: "2026年4月", content: "公立諏訪東京理科大学 卒業見込み" },
  ];
  return (
    <Container>
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
