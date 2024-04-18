import style from "../CardTrilha/footer.module.css";
import "boxicons";

function footer() {
  return (
    <div className={style.container}>
        <div>
            <h3>Created by: Francisco Grimes</h3>
        </div>
        <div className={style.content}>
            <a href="https://github.com/franciscogrimes"><box-icon name='github' type='logo' ></box-icon></a>
            <a href="https://www.linkedin.com/in/francisco-grimes-bb773a260/"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
        </div>

    </div>
  );
}

export default footer;
