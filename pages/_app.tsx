import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "src/contexts/AuthContext";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/themes";

const myTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (<ChakraProvider theme={myTheme}>
            <AuthProvider>
              <GlobalStyle />
              <Component {...pageProps} />
            </AuthProvider>
          </ChakraProvider>);
}

export default MyApp;
