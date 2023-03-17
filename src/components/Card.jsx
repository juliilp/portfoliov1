import React from "react";
import "./Card.css";

export default function Card({
  imagen,
  titulo,
  parrafo,
  resumen,
  repositorio,
  pagina,
}) {
  return (
    <div className="container-card">
      <img className="imagen" src={imagen} alt="imagen" />
      <h4>{titulo}</h4>
      <h5 className="resumen">{resumen}</h5>
      <small>{parrafo}</small>
      <br />
      <br />
      <br />
      <div className="container-botones">
        <a href={pagina} target="blank">
          <button className="pagina">Pagina Web</button>
        </a>
        <a href={repositorio} target="blank">
          <button className="repo">Repositorio</button>
        </a>
      </div>
      <br />
    </div>
  );
}
