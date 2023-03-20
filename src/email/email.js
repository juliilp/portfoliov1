import axios from "axios";

const emailPost = async (nombre, correo, mensaje, apellido) => {
  console.log(nombre, correo, mensaje, apellido);
  // https://portfolio-backend-wine.vercel.app/email
  // http://localhost:3001/email
  try {
    const emailapi = await axios.post(
      "https://portfolio-backend-wine.vercel.app/email",
      {
        nombre,
        correo,
        mensaje,
        apellido,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    return emailapi;
  } catch (error) {
    console.log(error.message);
  }
};

export default emailPost;
