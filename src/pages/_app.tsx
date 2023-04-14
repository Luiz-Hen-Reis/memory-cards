import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Header } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
