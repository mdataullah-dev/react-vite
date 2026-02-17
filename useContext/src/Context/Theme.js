import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

//? themeProvider se wrap krna padega [app.jsx] ko phir uske ander
//? hum use kre lenegin useTheme custom hook jo humne banaya hai 
//? means jahan v themecontext use krna hioga hum use kr lengein useTheme 

export default function useTheme(){
    return useContext(ThemeContext)
}