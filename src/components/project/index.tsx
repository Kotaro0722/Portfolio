import { createElement, useState, useEffect } from "react";
import * as MUI from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Modal,
  Paper,
  Box,
} from "@mui/material";
import { date2YearMonthString } from "../../utils/dateFormatter";
import GitHubIcon from "@mui/icons-material/GitHub";

export type ProjectPartsType = {
  title: string;
  date: Date;
  abstract: string;
  contentLink: string;
  img: string;
  github?: string;
};

type ProjectContentModalPRops = {
  isOpen: boolean;
  handleOnClose: (open: boolean) => void;
};

export const ProjectParts = ({
  title,
  date,
  abstract,
  contentLink,
  img,
  github,
}: ProjectPartsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnClickCard = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Card sx={{ cursor: "pointer" }}>
        <Box onClick={handleOnClickCard}>
          <CardHeader title={title} subheader={date2YearMonthString(date)} />
          <CardMedia component="img" height="300" image={img} />
          <CardContent>
            <Typography>{abstract}</Typography>
          </CardContent>
          {github && (
            <CardActions>
              <IconButton aria-label="link to github" href={github}>
                <GitHubIcon />
              </IconButton>
            </CardActions>
          )}
        </Box>
      </Card>
    </>
  );
};

// const ProjectContentModal = ({
//   contents,
//   isOpen,
//   handleOnClose,
// }: ProjectContentModalPRops) => {
//   return (
//     <Modal
//       open={isOpen}
//       onClose={handleOnClose}
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Paper
//         sx={{
//           width: "70%",
//           height: "70%",
//         }}
//       >
//         {contents.map((content, index) => {
//           return (
//             <DynamicMUIComponent
//               componentName={content[0] as MUIComponentName}
//               children={content[1]}
//               key={index}
//             />
//           );
//         })}
//       </Paper>
//     </Modal>
//   );
// };
