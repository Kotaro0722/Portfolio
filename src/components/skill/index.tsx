import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";

export type SkillPartsType = {
  icons: Array<string>;
  title: string;
  master: 1 | 2 | 3 | 4 | 5;
  content: string;
};

export const SkillParts = ({
  icons,
  title,
  master,
  content,
}: SkillPartsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "12px",
        border: "1px solid black",
        borderRadius: "10px",
        gap: "5px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}
      >
        {icons.map((icon, index) => (
          <img
            src={icon}
            alt={icon}
            style={{ width: "100px", height: "100px" }}
            key={index}
          />
        ))}
      </Box>

      <Typography>{title}</Typography>
      <Divider flexItem sx={{ borderWidth: "1px", my: "8px" }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>熟練度</Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} isFilled={i < master} />
          ))}
        </Box>
      </Box>
      <Typography textAlign="center">{content}</Typography>
    </Box>
  );
};

const Star = styled.div<{ isFilled: boolean }>`
  margin: 5px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 8px solid
    ${(props) => (props.isFilled ? "#f2c820" : "#e0e0e0")};
  display: block;
  height: 0;
  width: 0;
  position: relative;
  transform: rotate(35deg);

  &::before,
  &::after {
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 8px solid
      ${(props) => (props.isFilled ? "#f2c820" : "#e0e0e0")};
    content: "";
    display: block;
    height: 0;
    left: -12px;
    position: absolute;
    top: 0;
    width: 0;
  }

  &::before {
    transform: rotate(71deg);
  }

  &::after {
    transform: rotate(-71deg);
  }
`;
