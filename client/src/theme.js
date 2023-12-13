import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('black', 'white')(props),
       bg: mode('whiteAlpha.700', 'gray.800')(props),
      },
    }),
  },
  components: {
    Button : {
      baseStyle: {
        _hover: {
            bg: mode('blue.600', 'blue.600'),
        },
      },
    },
  },
});

export default theme;
