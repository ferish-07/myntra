import logo from "./logo.svg";
import "./App.css";
import Navbar from "./screens/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import NewRoutes from "./screens/NewRoutes";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NewRoutes />
      </Router>
    </div>
  );
}

export default App;
