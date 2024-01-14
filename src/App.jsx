import { MantineProvider } from '@mantine/core';
import Routes from "./routes"
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

function App() {
  // const [count, setCount] = useState(true)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes />
    </MantineProvider>
  )
}

export default App
