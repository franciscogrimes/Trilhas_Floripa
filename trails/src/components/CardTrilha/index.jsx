import style from "./index.module.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          width={200}
          height={200}
          src={dadosTrilha.url}
          alt="Imagem da Trilha"
        />
        <div className={style.cardData}>
          <h3>{dadosTrilha.nome}</h3>
          <h4>
            {dadosTrilha.cidade} - {dadosTrilha.estado}
          </h4>
          <p>Duração: {dadosTrilha.duracao}</p>
          <p>Distância: {dadosTrilha.distancia}</p>
          <p>Dificuldade: {dadosTrilha.dificuldade}</p>
          <p>Tipo: {dadosTrilha.tipo}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTrilha;
