import "./../styles.css";
import { AppProps } from "next/app";
import Script from "next/script";
const App = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <>
      <Component {...pageProps} />
      <Script src="//cdn.jsdelivr.net/npm/share-buttons/dist/share-buttons.js" />
    </>
  );
};

export default App;
