import Routes from "./routes/Routes";
import { AppStore } from "./store";
import "./api/interceptors";

function App() {
  return (
    <AppStore>
      <Routes />
    </AppStore>
  );
}

export default App;
