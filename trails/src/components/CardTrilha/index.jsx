import PropTypes from "prop-types";

function CardTrilha({ dadosTrilha }) {
  return (
    <>
      <div>
        <img width={200} src={dadosTrilha.url} />
        <div>
          <h1>{dadosTrilha.nome}</h1>
          <h3>
            {dadosTrilha.cidade} - {dadosTrilha.estado}
          </h3>
        </div>
        <div>
          <p>Dificuldade: {dadosTrilha.dificuldade}</p>
          <p>Duração: {dadosTrilha.duracao} minutos-</p>
        </div>
      </div>
    </>
  );
}

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nome: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number,
    dificuldade: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

export default CardTrilha;
