import { Link } from "react-router-dom";
import style from "./assets/home.module.css";
import Button from '@mui/material/Button';


function home() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.bodyTop}>
          <h2>Que tal curtir uma trilha em Floripa?</h2>
          <p>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </p>
          <Link to="/trilhas">
           <Button variant="contained" size="medium"> 
              Explorar Trilhas
            </Button>
          </Link>
        </div>
        <div className={style.bodyMid}>
          <h2>Explore Trilha incriveis</h2>
          <p>
            O "Adventure Trails FD" é seu portal para explorar e compartilhar as
            melhores trilhas para trekking e ciclismo ao redor do mundo.
            Descubra rotas deslumbrantes, desde caminhos tranquilos por
            florestas exuberantes até trilhas desafiadoras em montanhas
            majestosas. Encontre informações detalhadas sobre cada trilha,
            incluindo distância, dificuldade, pontos de interesse naturais e
            dicas úteis para uma experiência eco-friendly.
          </p>
        </div>
        <div className={style.bodyBot}>
          <div className={style.bodyBotTx}>
          <h2>
            Compartilhe fotos, dicas e localização das suas trilhas favoritas
          </h2>
          <Link to="/nova-trilha">
          <Button variant="contained" size="medium"> 
              Cadastrar Trilhas
            </Button>
          </Link>
          </div>

          <img
            src="https://www.pousadadossonhos.com.br/wp-content/uploads/2018/02/o-que-conhecer-em-florianopolis-sc-1.jpg"
            alt="Imagem da ponte Hercilio Luz"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
