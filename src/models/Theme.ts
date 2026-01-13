export interface ITheme {
  name: string;
  backgroundColor: string;
  secondaryBgColor: string;
  buttonBackground: string;
  color: string;
  accentColor: string;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export enum ActionTypeTheme {
  TOGGLED,
}

export interface IActionTheme {
  type: ActionTypeTheme;
  payload: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Night",
    buttonBackground: "#2C2C2C",
    secondaryBgColor: "#101010",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    accentColor: "#5555bf",
  },
  light: {
    name: "Day",
    buttonBackground: "#d4d4d4",
    secondaryBgColor: "#f0f0f0",
    backgroundColor: "#ffffff",
    color: "#000000",
    accentColor: "#5555bf",
  },
};
