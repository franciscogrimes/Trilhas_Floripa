import React from "react";
import Header from "./components/CardTrilha/header";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
    </TrilhasContextProvider>
  );
}

export default App;
