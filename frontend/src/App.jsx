import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const checkCorsAcceptance = async () => {
    try {
      const result = await fetch("http://localhost:8000");
      console.log("It worked", result);
    } catch (error) {
      console.log("Error generated", error);
    }
  };

  checkCorsAcceptance();
  return <h1>Hello</h1>;
}

export default App;
