import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === "contained" &&
          ownerState.color === "primary"
            ? {
                backgroundColor: "#27AE60",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#5DC388",
                },
              }
            : {
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                ":hover": {
                  backgroundColor: "#D5D5D9",
                  border: "1px solid #fff",
                },
              }),
        }),
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
