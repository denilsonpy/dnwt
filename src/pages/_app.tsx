import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@libs/theme";
import { Fonts } from "@components/Fonts";

/**
 * Root app component
 */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
