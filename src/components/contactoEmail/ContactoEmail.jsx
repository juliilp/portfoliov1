import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactoEmail.css";
import Swal from "sweetalert2";
export default function ContactoEmail() {
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const sendEmail = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    emailjs
      .sendForm(
        "service_htfa0cg",
        "template_2te83ed",
        event.target,
        "muR_rneTUlOkLDPRR"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
    });
    setUser({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  return (
    <div>
      <h1 className="title-form">Contactemonos!</h1>
      <div className="div-form">
        <form className="form-mail" onSubmit={sendEmail}>
          <div className="contenedor-contacto">
            <label>Nombre</label>
            <input
              className="input-inside"
              type="text"
              name="user_name"
              onChange={sendEmail}
              value={user.user_name}
              required
            />

            <label>Email</label>
            <input
              className="input-inside"
              type="email"
              name="user_email"
              onChange={sendEmail}
              value={user.user_email}
              required
            />

            <label>Mensaje</label>
            <textarea
              className="textarea-inside"
              onChange={sendEmail}
              name="user_message"
              id=""
              value={user.user_message}
              placeholder="Deja aqui tu mensaje"
              required
            />

            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
