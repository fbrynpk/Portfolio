import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import GlobalStyles from "./globals";

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

const Theme = ({ children }) => (
  <ThemeProvider>
    <ThemeWrapper>{children}</ThemeWrapper>
  </ThemeProvider>
);

export default Theme;
