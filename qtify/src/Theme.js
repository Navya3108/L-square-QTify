import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#34C94B",
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: "#121212",
            contrastText: '#FFFFFF'
        }
    }
})

export const cssVariables = {
    '--color-primary': theme.palette.primary.main,
    '--color-black': theme.palette.secondary.main,
    '--color-white': theme.palette.primary.contrastText
}


export default theme;