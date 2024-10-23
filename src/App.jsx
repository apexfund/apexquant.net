import { createSystem, defaultConfig } from '@chakra-ui/react';
import { Provider } from "@/components/ui/provider"
import Main from './pages/Main.js';
import '@fontsource/oxygen';

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Oxygen', sans-serif` },
        body: { value: `'Oxygen', sans-serif` },
      }
    }
  }
})

function App() {
  return (
    <Provider value={system}>
      <Main />
    </Provider>
  );
}

export default App;