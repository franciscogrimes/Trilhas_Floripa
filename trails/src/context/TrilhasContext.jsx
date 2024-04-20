//* PASSOS PARA CRIAR UM CONTEXTO

//* 1 - [x] - IMPORTE O createContext DO REACT
//* 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO ( com o mesmo nome do arquivo )
//* 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
//* 4 - [x] - CRIE A VARIÁVEL DO PROVIDER

//* 5 - [x] - RECEBA A PROP CHILDREN
//* 6 - [] - DEFINA OS DADOS GLOBAIS
//* 7 - [] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
//* 8 - [] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
//* 9 - [] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
//* 10 - [] - IMPORTE O useContext DO REACT
//* 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext

import { createContext } from "react";
import useTrilhas from "../Hooks/trilhas";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
  const { trilhas, isLoading, error } = useTrilhas();

  function addTrail(novaTrilha) {
    setTrilhas((trilhasData) => [...trilhasData, novaTrilha]);
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <TrilhasContext.Provider value={{ trilhas, isLoading, error, addTrail }}>
      {children}
    </TrilhasContext.Provider>
  );
};
