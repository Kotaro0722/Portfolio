import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

type PageType = Readonly<{
  title: string;
  path: string;
}>;

export const Header = () => {
  const pages: PageType[] = [
    { title: "Profile", path: "/" },
    { title: "Skill", path: "/skill" },
    { title: "Project", path: "/project" },
    { title: "Internship", path: "/internship" },
    { title: "Community", path: "/community" },
  ];

  const location = useLocation();
  const navigation = useNavigate();

  const handleOnClickButton = (path: string) => {
    navigation(path);
  };

  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={{ backgroundColor: "white", mb: 3 }}
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
            gap: "50px",
          }}
        >
          {pages.map((page, index) => (
            <Button
              key={index}
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "17px",
                fontFamily: "Roboto",
                backgroundColor:
                  location.pathname == page.path
                    ? "rgb(204,204,204)"
                    : "inherit",
              }}
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
