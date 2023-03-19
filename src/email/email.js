import axios from "axios";

const emailPost = async (nombre, correo, mensaje, apellido) => {
  console.log(nombre, correo, mensaje, apellido);
  try {
    const emailapi = await axios.post(
      "https://portfolio-back-delta.vercel.app/enviar",
      {
        nombre,
        correo,
        mensaje,
        apellido,
      }
    );
    return emailapi;
  } catch (error) {
    console.log(error.message);
  }
};

export default emailPost;
