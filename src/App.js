import "./App.css";
import Header from "./Header/Header";
import { useRoutes } from "react-router";
import routes from "./utils/navRoutes";
import { useMemo } from "react";

function App() {
  const routesList = useRoutes(routes);
  const memoizedData = useMemo(() => <Header routes={routes} />, [routes]);
  return (
    <div className="App">
      {memoizedData}
      {routesList}
    </div>
  );
}

export default App;
