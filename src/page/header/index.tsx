import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type PageType = Readonly<{
  title: string;
  path: string;
}>;

export const Header = () => {
  const pages: PageType[] = [
    { title: "Profile", path: "/" },
    { title: "Project", path: "/project" },
    { title: "Work・Internship", path: "/work" },
    { title: "Community", path: "/community" },
  ];

  const navigation = useNavigate();

  const handleOnClickButton = (path: string) => {
    navigation(path);
  };

  return (
    <AppBar
      position="sticky"
      enableColorOnDark
      sx={{ backgroundColor: "white" }}
    >
      <Toolbar
        sx={{
          height: "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            color: "black",
            fontWeight: "bold",
            fontFamily: "serif",
          }}
        >
          Portfolio
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {pages.map((page, index) => (
            <Button
              key={index}
              sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
              onClick={() => handleOnClickButton(page.path)}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
