import "./App.css";
import { DataContextProvider } from "./context";
import Rotas from "./Routes";

function App() {
  return (
    <div className="container-dashboard">
      <Rotas />
    </div>
  );
}

export default App;
