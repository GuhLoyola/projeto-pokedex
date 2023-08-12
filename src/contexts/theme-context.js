import { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#FFFFFF",
        foreground: "#FE4040",
        primaryText: "#262626",
        secundaryText: "#ACACAC"
    },
    dark: {
        background: "#000000",
        foreground: "#363636",
        primaryText: "#EEEEEE",
        secundaryText: "#A7A6A6"
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