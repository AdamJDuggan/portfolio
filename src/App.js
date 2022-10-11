// React
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "./routes";
// Components
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
// Assets
import "./fonts/tusker-grotesk-font/TuskerGrotesk-6500Medium.ttf";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} exact />
        <Route path={routes.PROJECT} element={<ProjectPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
