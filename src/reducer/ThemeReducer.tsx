import type { ITheme } from "../models/Theme";
import { ActionTypeTheme } from "../models/Theme";

export interface IActionTheme {
  type: ActionTypeTheme;
  payload: ITheme;
}

export const ThemeReducer = (theme: ITheme, action: IActionTheme): ITheme => {
  switch (action.type) {
    case ActionTypeTheme.TOGGLED:
      return action.payload;
    default:
      return theme;
  }
};
