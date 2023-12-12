import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "light" ? "black" : "white",
      },
    }),
  },
});

export default theme;
