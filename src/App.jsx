import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/MainContent";

export default function App() {
  return (
    <div className="w-[550px] mx-auto">
      <Navbar />
      <Main />
    </div>
  );
}
