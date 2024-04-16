import { Link } from "react-router-dom";
import style from "../CardTrilha/header.module.css";
import "boxicons";

function header() {
  return (
    <div className={style.container}>
      <Link to="/menu-principal">
        <box-icon name="directions"></box-icon>
      </Link>

      <div className={style.content}>
        <Link to="/trilhas" style={{ color: "black" }}>
          Explorar trilhas
        </Link>
        <Link to="/nova-trilha" style={{ color: "black" }}>
          Cadastrar trilhas
        </Link>
      </div>
    </div>
  );
}

export default header;
