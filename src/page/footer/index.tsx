import {
  AppBar,
  Button,
  Fab,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Footer = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="static"
        enableColorOnDark
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar
          sx={{
            height: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                color: "black",
                lineHeight: "64px",
                textAlign: "center",
              }}
            >
              ©2024 Kotaro Tanaka
            </Typography>
            <Button href="https://github.com/Kotaro0722">
              <img
                src="img/github.svg"
                alt="github"
                style={{ width: "30px" }}
              />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <Fab color="default" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};
