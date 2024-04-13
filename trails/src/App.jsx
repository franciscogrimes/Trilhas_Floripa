import React from "react";
import Header from "./components/CardTrilha/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
}

export default App;
