import navbarTrail from "./navbarTrail";

function CardTrilha({ dadosTrilha }) {
  return (
    <div>
      <div>
        <img width={200} src={dadosTrilha.url} alt="Imagem da Trilha" />
      </div>
      <div>
        <h1>{dadosTrilha.nome}</h1>
        <h2>
          {dadosTrilha.cidade} - {dadosTrilha.estado}
        </h2>
      </div>
      <div>
        <p>Duração: {dadosTrilha.duracao}</p>
        <p>Distância: {dadosTrilha.distancia}</p>
        <p>Dificuldade: {dadosTrilha.dificuldade}</p>
        <p>Tipo: {dadosTrilha.tipo}</p>
      </div>
    </div>
  );
}

export default CardTrilha;
