import style from "./index.module.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div>
      <div className={style.img}></div>
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <img
            className={style.cardImage}
            src={dadosTrilha.url}
            alt="Imagem da Trilha"
          />
        </div>
        <div className={style.cardData}>
          <div className={style.cardHeader}>
            <h2>{dadosTrilha.nome}</h2>
            <h3>
              {dadosTrilha.cidade} - {dadosTrilha.estado}
            </h3>
          </div>
          <div className={style.cardDifficulty}>
            <p>Dificuldade: {dadosTrilha.dificuldade}</p>
          </div>
          <div className={style.cardBody}>
            <p>Duração: {dadosTrilha.duracao}</p>
            <p>Distância: {dadosTrilha.distancia}</p>
            <p>Tipo: {dadosTrilha.tipo}</p>
          </div>
          <div className={style.cardCreator}>
            <p>Criado por: {dadosTrilha.criador}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CardTrilha;
