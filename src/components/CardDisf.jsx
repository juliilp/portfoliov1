import React from "react";
import Swal from "sweetalert2";
export default function CardDisf({
  imagen,
  titulo,
  parrafo,
  resumen,
  repositorio,
  urlImagen,
}) {
  const buttonHandler = () => {
    Swal.fire({
      title: "Volviendo a hacer el CSS y Responsive :(",
      text: 'Aún así, en "Repositorio" está completo con sus funcionalidades y css anterior',
      icon: "error",
    });
  };
  return (
    <div className="container-card">
      <a href={urlImagen} target="blank">
        <img className="imagen" src={imagen} alt="imagen" />
      </a>
      <br />
      <br />
      <h4>{titulo}</h4>
      <h5 className="resumen">{resumen}</h5>
      <small>{parrafo}</small>
      <br />
      <br />
      <br />
      <div className="container-botones">
        <button className="pagina disf" onClick={buttonHandler}>
          Pagina Web
        </button>
        <button className="repo">
          <a href={repositorio} target="blank">
            {" "}
            Repositorio{" "}
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}
