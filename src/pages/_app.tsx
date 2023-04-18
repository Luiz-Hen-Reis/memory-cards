import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global-styles";
import { ThemeProvider } from "styled-components";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DynamicHeader = dynamic(() => import("../components/Header"));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        {!router.pathname.includes("auth") && <DynamicHeader />}
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}
