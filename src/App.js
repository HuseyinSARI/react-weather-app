import Container from './components/Container';
import { WeatherProvider  } from "./context/WeatherContext";

import "../src/App.css"

function App() {

  return (
    <WeatherProvider >
      <Container/>
    </WeatherProvider>
  );
}

export default App;
