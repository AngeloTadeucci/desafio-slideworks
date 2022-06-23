import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "../hooks";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}

export default MyApp;
export type { Props };
