import style from "./navbarTrail.modules.css";

function navbarTrail() {
  return (
    <div className={style.container}>
      <h3>Adventure Trails FD</h3>

      <div className={style.content}>
        <h3>Explorar trilhas</h3>
        <h3>Cadastrar trilhas</h3>
      </div>
    </div>
  );
}

export default navbarTrail;
