import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from './pages/Main.js';
import '@fontsource/oxygen';
import './App.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'black',
        backgroundColor: '#d1d8e0'
      },
      '*': {
        color: 'black',
      }
    },
  },
  fonts: {
    heading: `'Oxygen', sans-serif`,
    body: `'Oxygen', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;