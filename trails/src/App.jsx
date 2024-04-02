import CardTrilha from "./components/CardTrilha";
import PropTypes from "prop-types";

function App() {
  const listaTrilhas = [
    {
      nome: "Morro do Cambirela",
      cidade: "Palhoça",
      estado: "SC",
      duracao: "150",
      dificuldade: "dificil",
      tipo: "Caminhada/ Running",
      url: "./assets/cambirela.jpg",
    },
  ];

  return (
    <>
      {listaTrilhas.map((trilha, index) => {
        <CardTrilha dadosTrilha={trilha} key={index} />;
      })}
    </>
  );
}

export default App;
