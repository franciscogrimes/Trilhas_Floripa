import useForm from "react-form-hook";

function newTrail() {
  const { register } = useform();
  return (
    <>
      <h2>Cadastro de Trilhas</h2>
      <p>
        Abaixo, preencha os dados para o cadastro da nova trilha na plataforma:
      </p>
      <form>
        <div>
          <label htmlFor="name" id="name">
            Nome da trilha:
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Por favor, insira o nome da trilha",
              minLenght: {
                value: 5,
                message: "O nome deve conter ao menos 5 caracteres",
              },
              pattern: {
                value: 60,
                message: "Ops...Você atingiu o limite de 60 caracteres",
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="duration" id="duration">
            Duração estimada:
          </label>
        </div>
        <div>
          <label htmlFor="distancy" id="distancy">
            Distância aproximada:
          </label>
        </div>
        <div>
          <label htmlFor="city" id="city">
            Cidade:
          </label>
        </div>
        <div>
          <label htmlFor="dificulty" id="dificulty">
            Dificuldade:
          </label>
        </div>
        <div>
          <label htmlFor="type" id="type">
            Tipo:
          </label>
        </div>
        <div>
          <label htmlFor="image" id="image">
            Imagem:
          </label>
        </div>
      </form>
    </>
  );
}

export default newTrail;
