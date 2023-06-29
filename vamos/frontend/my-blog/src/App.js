import HomeView from "../src/views/HomeView";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HomeView />
    </Router>
  );
}
export default App;
