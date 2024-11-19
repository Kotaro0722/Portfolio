import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./page/footer";
import { Header } from "./page/header";
import { Profile } from "./page/profile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans JP"',
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);
