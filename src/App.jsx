import { MantineProvider } from '@mantine/core';
import Routes from "./routes"
function App() {
  // const [count, setCount] = useState(true)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes />
    </MantineProvider>
  )
}

export default App
