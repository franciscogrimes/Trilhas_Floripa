import CardTrilha from "../components/CardTrilha/index";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";

function trails() {
  const { trilhas } = useContext(TrilhasContext);

  return (
    <>
      {trilhas.map((trilha, index) => {
        return <CardTrilha dadosTrilha={trilha} key={index} />;
      })}
    </>
  );
}

export default trails;
