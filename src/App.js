import "./App.css";
import Header from "./Header/Header";
import { useRoutes } from "react-router";
import routes from "./utils/navRoutes";

function App() {
  const routesList = useRoutes(routes);
  return (
    <div className="App">
      <Header routes={routes} />
      {routesList}
    </div>
  );
}

export default App;
