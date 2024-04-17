import React from "react";
import Header from "./components/CardTrilha/header";
import Footer from "./components/CardTrilha/footer";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  );
}

export default App;
