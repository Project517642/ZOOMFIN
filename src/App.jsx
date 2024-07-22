import React from "react";
import NavBar from "./components/NavBar";
import Router from "./utils/Router";

function App() {
  return (
    <div className="w-full scroll-smooth">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
