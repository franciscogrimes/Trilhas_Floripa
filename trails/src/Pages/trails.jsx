import CardTrilha from "../components/CardTrilha/index";
import useTrilhas from "../Hooks/trilhas";
import App from "../App";

function trails() {
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

export default trails;
