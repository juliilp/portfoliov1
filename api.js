import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-back-delta.vercel.app",
});

export const enviarDatos = (data) => {
  const url = "/enviar";
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://julianlopezpadua.vercel.app",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
  return api.post(url, data, config);
};
