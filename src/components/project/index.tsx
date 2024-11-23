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
  CardActionArea,
  Button,
} from "@mui/material";
import { date2YearMonthString } from "../../utils/dateFormatter";
import GitHubIcon from "@mui/icons-material/GitHub";

export type ProjectPartsType = {
  title: string;
  date: Date;
  abstract: string;
  contentLink?: string;
  img?: string;
  github?: string;
  skill: Array<string>;
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
  return (
    <Card>
      <Box>
        <CardHeader title={title} subheader={date2YearMonthString(date)} />
        {img ? (
          <CardActionArea href={contentLink || ""} disabled={!contentLink}>
            <CardMedia
              component="img"
              height="300"
              image={img}
              sx={{ cursor: contentLink && "pointer" }}
            />
          </CardActionArea>
        ) : (
          <Button
            sx={{ width: "100%", height: "300px" }}
            href={contentLink}
            disabled={!contentLink}
          />
        )}
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
  );
};
