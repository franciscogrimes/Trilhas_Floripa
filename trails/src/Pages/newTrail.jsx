import {useForm} from "react-hook-form";
import Button from '@mui/material/Button';


function newTrail() {

  
  const { register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = ( dados ) => console . registro ( dados )

  return (
    <>
      <h2>Cadastro de Trilhas</h2>
      <p>
        Abaixo, preencha os dados para o cadastro da nova trilha na plataforma:
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
          <label htmlFor="name">Nome completo:</label>
         <input 
            type="text"
            {...register("name",{
              required: "Por favor insira seu nome.",
              minLength:{
                value: 5,
                message: "Digite ao menos 5 caracteres."
              },
              pattern:{
                value: 60,
                message: "Ops...Você atingiu o limite máximo de 60 caracteres."
              }
            })}
            />
            {errors.name && <p>{errors.name.message}</p>}
        
          
         </div>           
        <div>
          <label htmlFor="nameTrail" id="nameTrail">
            Nome da trilha:
          </label>
          <input
            type="text"
            {...register("nameTrail", {
              required: "Por favor, insira o nome da trilha.",
              minLenght: {
                value: 5,
                message: "O nome deve conter ao menos 5 caracteres.",
              },
              pattern: {
                value: 60,
                message: "Ops...Você atingiu o limite máximo de 60 caracteres.",
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="duration" id="duration">
            Duração estimada (min):
          </label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="distancy" id="distancy">
            Distância aproximada (km):
          </label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="city" id="city">
            Cidade:
          </label>
          <input
            type="text"
            {...register("nameTrail", {
              required: "Por favor, insira a cidade onde se encontra essa trilha.",
              minLenght: {
                value: 5,
                message: "O nome deve conter ao menos 5 caracteres.",
              },
              pattern: {
                value: 60,
                message: "Ops...Você atingiu o limite máximo de 60 caracteres.",
              },
            })}
          />

        </div>
        <div>
          <label htmlFor="dificulty" id="dificulty">
            Dificuldade:
          </label>
          <select {...register("dificulty", { required: true })}>
            <option value="high">Alta</option>
            <option value="medium">Média</option>
            <option value="low">Baixa</option>
          </select>
        </div>
        <div>
          <label htmlFor="type" id="type">
            Tipo:
          </label>
          <select {...register("type", { required: true })}>
            <option value="Alta">Caminhada</option>
            <option value="Alta">Trekking</option>
            <option value="Média">Running</option>
            <option value="Média">Caminhada/Trekking</option>
            
          </select>
        </div>
        <div>
          <label htmlFor="image" id="image">
            Imagem:
          </label>
          <input type="url" />
        </div>

          <Button type="submit" variant="contained" size="medium" > 
            Cadastrar Trilha
          </Button>
      </form>
    </>
  );
}

export default newTrail;
