import { ChakraProvider, Flex, color, extendTheme } from '@chakra-ui/react';
import Main from './pages/Main.js';
import '@fontsource/oxygen';
import './App.css';

const theme = extendTheme({
  fonts: {
    heading: `'Oxygen', sans-serif`,
    body: `'Oxygen', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" height="100vh" width="100%" bg="#d1d8e0">
        <Main />
      </Flex>
    </ChakraProvider>
  );
}

export default App;