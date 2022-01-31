import GlobalStyle from "../../styles/GlobalStyle";
import Providers from "../providers";

const App = ({ Component, pageProps }) => {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
