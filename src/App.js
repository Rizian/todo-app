import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Register from "./Register";
import Reset from "./Reset";
import Login from "./Login";

import "./App.css";

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route exact path = "/" element={<Login />} />
        <Route exact path = "/register" element={<Register />} />
        <Route exact path = "/reset" element={<Reset />} />
        <Route exact path = "/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
