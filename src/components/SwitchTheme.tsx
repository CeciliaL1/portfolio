import { useContext, useState } from "react";

import { Switch } from "./styled/Buttons";
import { ThemeContext } from "../context/ThemeContext";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(theme.name === "Day");

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  };

  return (
    <>
      <div className="switch-container">
        <Switch
          buttonbgcolor={theme.buttonBackground}
          accentcolor={theme.accentColor}
          isDarkMode={isDarkMode}
          onClick={toggleMode}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              backgroundColor: isDarkMode ? theme.accentColor : "#fff",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {isDarkMode ? (
              <i style={{ marginTop: "4px" }} className="fa-solid fa-moon"></i>
            ) : (
              <i
                style={{ color: "black", marginTop: "4px" }}
                className="fa-regular fa-sun"
              ></i>
            )}
          </div>
        </Switch>
      </div>
    </>
  );
};
