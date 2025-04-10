import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className=" bg-white overflow-hidden">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
