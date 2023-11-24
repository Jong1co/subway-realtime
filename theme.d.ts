import "styled-components";
import { theme } from "./theme";
import { colors } from "./styles/colors";
import { font } from "./styles/font";

type Color = keyof typeof colors;
type Font = keyof typeof font;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in Color]: string };
    font: { [key in Font]: string };
  }
}
