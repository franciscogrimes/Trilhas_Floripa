import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";

import style from "./assets/newTrail.module.css";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function newTrail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addTrail } = useContext(TrilhasContext);

  const onSubmit = (dados) => {
    console.log(dados);

    addTrail(dados);
  };
  const [difficulty, setDifficulty] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "difficulty") {
      setDifficulty(value);
    } else if (name === "type") {
      setType(value);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h2>Cadastro de Trilhas</h2>
        </div>
        <div className={style.titlePg}>
          <p>
            Abaixo, preencha os dados para o cadastro da nova trilha na
            plataforma:
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formName}>
            <TextField
              sx={{
                width: 460,
                color: "white",
              }}
              required
              id="outlined-required"
              label="Nome Completo"
              {...register("name", {
                required: "Por favor insira seu nome.",
                minLength: {
                  value: 5,
                  message: "Digite ao menos 5 caracteres.",
                },
                pattern: {
                  value: 60,
                  message:
                    "Ops...Você atingiu o limite máximo de 60 caracteres.",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <TextField
              sx={{
                width: 460,
                color: "rgba(255, 255, 255, 0.8)",
              }}
              required
              id="outlined-required"
              label="Nome da Trilha"
              type="text"
              {...register("nameTrail", {
                required: "Por favor, insira o nome da trilha.",
                minLength: {
                  value: 5,
                  message: "O nome deve conter ao menos 5 caracteres.",
                },
                pattern: {
                  value: 60,
                  message:
                    "Ops...Você atingiu o limite máximo de 60 caracteres.",
                },
              })}
            />
            {errors.nameTrail && <p>{errors.nameTrail.message}</p>}
          </div>
          <div className={style.formMed}>
            <div>
              <TextField
                id="outlined-number"
                label="Duração estimada (min)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div>
              <TextField
                id="outlined-number"
                label="Distância aproximada (km)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div>
            <TextField
              sx={{
                width: 460,
                color: "success.main",
              }}
              required
              id="outlined-required"
              label="Cidade"
              {...register("city", {
                required:
                  "Por favor, insira a cidade onde se encontra essa trilha.",
                minLength: {
                  value: 5,
                  message:
                    "O nome da cidade deve conter ao menos 5 caracteres.",
                },
                pattern: {
                  value: 60,
                  message:
                    "Ops...Você atingiu o limite máximo de 60 caracteres.",
                },
              })}
            />

            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className={style.formSelect}>
            <div>
              <FormControl>
                <InputLabel id="difficulty-label">Dificuldade</InputLabel>
                <Select
                  labelId="difficulty-label"
                  id="difficulty"
                  value={difficulty}
                  name="difficulty"
                  onChange={handleChange}
                  sx={{
                    width: 225,
                    color: "success.main",
                  }}
                >
                  <MenuItem value="">
                    <em>Nenhuma</em>
                  </MenuItem>
                  <MenuItem value="high">Alta</MenuItem>
                  <MenuItem value="medium">Média</MenuItem>
                  <MenuItem value="low">Baixa</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl>
                <InputLabel id="type-label">Tipo</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={type}
                  name="type"
                  onChange={handleChange}
                  sx={{
                    width: 225,
                    color: "success.main",
                  }}
                >
                  <MenuItem value="">
                    <em>Nenhuma</em>
                  </MenuItem>
                  <MenuItem value="caminhada">Caminhada</MenuItem>
                  <MenuItem value="trekking">Trekking</MenuItem>
                  <MenuItem value="caminhada/trekking">
                    Caminhada/Trekking
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={style.formName}>
            <TextField
              sx={{
                width: 460,
                color: "success.main",
              }}
              required
              id="outlined-required"
              label="URL da Imagem"
              {...register("url", {
                required: "Por favor insira a URL da imagem.",
                minLength: {
                  value: 5,
                  message: "Digite ao menos 5 caracteres.",
                },
                pattern: {
                  value: 60,
                  message:
                    "Ops...Você atingiu o limite máximo de 60 caracteres.",
                },
              })}
            />
            {errors.url && <p>{errors.url.message}</p>}
          </div>
          <div className={style.formBtn}>
            <Button type="submit" variant="contained" size="medium">
              Cadastrar Trilha
            </Button>
            <Button type="button" variant="contained" size="medium">
              Voltar ao home
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default newTrail;
