import { Link } from "react-router-dom";
import style from "../CardTrilha/header.module.css";

function header() {
  return (
    <div className={style.container}>
      <Link to="/menu-principal" style={{ color: "#ffffff" }}>
        Adventure Trails FD
      </Link>

      <div className={style.content}>
        <Link to="/trilhas" style={{ color: "#ffffff" }}>
          Explorar trilhas
        </Link>
        <Link to="/nova-trilha" style={{ color: "#ffffff" }}>
          Cadastrar trilhas
        </Link>
      </div>
    </div>
  );
}

export default header;
