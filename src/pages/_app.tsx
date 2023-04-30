import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useStore } from "react-redux";
function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
      <Component {...pageProps} />
  );
}

export default App;
