import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Box,
  Divider,
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
  skill: Array<string>;
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
  skill,
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
            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography> 使用技術</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {skill.map((sk, index) => (
                  <img
                    src={"img/" + sk + ".svg"}
                    alt=""
                    key={index}
                    width="40px"
                  />
                ))}
              </Box>
            </Box>
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
