import { useState, useReducer, useEffect } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { themes, ActionTypeTheme } from "./models/Theme";
import { SwitchTheme } from "./components/SwitchTheme";
import { ThemeReducer } from "./reducer/ThemeReducer";
import { Header } from "./components/Header";
import { PersonalSection } from "./components/PersonalSection";

function App() {
  const root = document.documentElement;

  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: light").matches
  );
  const [theme, dispatch] = useReducer(ThemeReducer, themes.light);

  useEffect(() => {
    if (isDarkTheme) {
      dispatch({ type: ActionTypeTheme.TOGGLED, payload: themes.light });
    }
    if (!isDarkTheme) {
      dispatch({ type: ActionTypeTheme.TOGGLED, payload: themes.dark });
    }
    root.style.backgroundColor = theme.backgroundColor;
  }, [isDarkTheme, theme.backgroundColor, root]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    return theme.name === themes.light.name
      ? dispatch({ type: ActionTypeTheme.TOGGLED, payload: themes.dark })
      : dispatch({ type: ActionTypeTheme.TOGGLED, payload: themes.light });
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <SwitchTheme></SwitchTheme>
        <Header></Header>
        <PersonalSection></PersonalSection>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
