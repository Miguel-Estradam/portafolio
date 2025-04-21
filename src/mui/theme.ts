'use client'
import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#0070f3",
        },
        secondary: {
            main: "#1c1c1e",
        },
        background: {
            default: "#FBF1DC",
            paper: "#1c1c1e",
        },
        text: {
            primary: "#ffffff",
            secondary: "#d1d1d1",
        },
        error: {
            main: "#ff0000",
        },
        info: {
            main: "#0070f3",
        },
    },
    typography:{
        fontFamily: roboto.style.fontFamily,

    }

})

export default theme;