import React from "react";
import "./Card.css";

export default function Card({
  imagen,
  titulo,
  parrafo,
  resumen,
  repositorio,
  pagina,
  urlImagen,
}) {
  return (
    <div className="container-card">
      <a href={urlImagen} target="blank" className="container-img" >
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
        <button className="pagina">
          <a href={pagina} target="blank">
            Página Web
          </a>
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
