import React, { useState } from "react";
import emailPost from "../../email/email";
import "./ContactoEmail.css";
export default function ContactoEmail() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const userHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);

  const buttonHandler = () => {
    if (!user.email.includes("@")) {
      alert("Email incorrecto");
    } else if (user.email.length <= 15) {
      alert("Verifique su email");
    } else if (user.nombre.length < 3) {
      alert("Su nombre mínimo debe contener 3 letras");
    } else if (user.apellido.length < 3) {
      alert("Su apellido mínimo debe contener 3 letras");
    } else {
      emailPost(user.nombre, user.email, user.mensaje, user.apellido);
      alert("Mensaje con éxito");
      setUser({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
      });
    }
  };
  return (
    <div>
      <h3 className="contactemonos">Contactémonos!</h3>
      <div className="main-container">
        <br />
        <br />
        <input
          name="nombre"
          value={user.nombre}
          placeholder="Nombre"
          className="input-usuario nombre-contacto"
          onChange={userHandler}
        />
        <input
          name="apellido"
          value={user.apellido}
          placeholder="Apellido"
          className="input-usuario apellido"
          onChange={userHandler}
        />
        <input
          name="email"
          type="email"
          value={user.email}
          placeholder="Email"
          onChange={userHandler}
          className="input-usuario email "
        />
        <textarea
          name="mensaje"
          className="textarea-mensaje mensaje "
          value={user.mensaje}
          placeholder="Mensaje"
          onChange={userHandler}
        />
      </div>
      <button className="enviar-mensaje" onClick={buttonHandler}>
        Enviar Mensaje
      </button>
    </div>
  );
}
