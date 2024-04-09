import React from "react";
import CardTrilha from "./components/CardTrilha";
import useTrilhas from "../src/Hooks/trilhas";

function App() {
  const { trilhas, isLoading, error } = useTrilhas();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <>
      {trilhas.map((trilha, index) => {
        return <CardTrilha dadosTrilha={trilha} key={index} />;
      })}
    </>
  );
}

export default App;
