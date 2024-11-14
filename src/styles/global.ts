import { createGlobalStyle } from "styled-components";

import themeStyles from "./theme";

type GlobalStylesProps = {
  theme?: typeof themeStyles;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>``;

export default GlobalStyles;
