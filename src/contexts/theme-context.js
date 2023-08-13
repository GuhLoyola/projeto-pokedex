import { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#FFFFFF",
        foreground: "#FE4040",
        primaryText: "#262626",
        secundaryText: "#ACACAC",
        boxShadow: "0 2px 8px #000000"
    },
    dark: {
        background: "#000000",
        foreground: "#363636",
        primaryText: "#EEEEEE",
        secundaryText: "#121212",
        boxShadow: "0 2px 8px #FFFFFF"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}