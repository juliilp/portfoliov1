import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
    setUser({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  return (
    <div className="div-form">
      <h1 className="title-form">Contact Us</h1>
      <form className="form-mail" onSubmit={sendEmail}>
        <label>Nombre</label>
        <input
          type="text"
          name="user_name"
          onChange={sendEmail}
          value={user.user_name}
        />
        <hr />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          onChange={sendEmail}
          value={user.user_email}
        />
        <hr />

        <label>Mensaje</label>
        <textarea
          onChange={sendEmail}
          name="user_message"
          id=""
          value={user.user_message}
        ></textarea>
        <hr />
        <button>Enviar</button>
      </form>
    </div>
  );
}
