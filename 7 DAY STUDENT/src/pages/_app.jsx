import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import theme from "../../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar
        newestOnTop
        closeOnClick
        containerId={1}
        theme="dark"
        pauseOnFocusLoss={false}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
