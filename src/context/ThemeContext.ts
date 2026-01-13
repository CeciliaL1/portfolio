import { createContext } from "react";
import { themes } from "../models/Theme";
import type { ITheme } from "../models/Theme";

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.light,
  toggleTheme: () => {},
});
