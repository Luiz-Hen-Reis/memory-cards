import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
