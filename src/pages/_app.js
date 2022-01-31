import GlobalStyle from "../../styles/GlobalStyle";
//import Providers from "../providers";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
