import "./App.css";
import Card from "./components/Card";
import mercadosolidario from "./imagenes/mercadosolidario.png";
import {
  SiExpress,
  SiPostgresql,
  SiJavascript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <div className="primerSeccion">
        <h2>
          Hola!👋 <br /> <span className="arribanombre">Mi nombre es</span>
          <span className="nombre">Julian Lopez Padua</span>
        </h2>
        <br />
        <p className="yo">
          Soy Desarollador Web Full Stack, Mi interés se centra en la
          elaboración de productos de calidad con trabajo en equipo hasta poder
          cumplir nuestra meta, soy una persona perseverante, comprometida,
          comunicativa y dispuesto a nuevos desafios y aprendizajes. Soy una
          persona que bajo presión sabe hacer lo necesario para seguir adelante
          con un buen compañerismo y hacer necesario para poder entregar el
          final del producto en tiempo y forma.
        </p>
        <br />
        <div className="container-button">
          <a href="youtube.com" className="cv button ">
            Descargar CV
          </a>
          <br />
          <a href="#contacto" className="contacto button ">
            Contacto
          </a>
        </div>
        <br />
        <div className="tecnologias">
          <div className="tecnologia">
            <br />
            <div className="html">
              <SiHtml5 size="2rem" color="#C40000" />
            </div>
            <span>Html</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiCss3 size="2rem" color="#0000C8" />
            <span>Css</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiJavascript size="2rem" color="#FFF058" />
            <span>Javascript</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiReact size="2rem" color="#60DBFB" />
            <span>React</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiRedux size="2rem" color="#7249B7" />
            <span>Redux</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiNextdotjs size="2rem" />
            <span>Next</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiExpress size="2rem" />
            <span>ExpressJS</span>
            <br />
          </div>
          <div className="tecnologia">
            <br />
            <SiPostgresql size="2rem" color="#31628B" />
            <span>postgreSQL</span>
          </div>
        </div>
        <hr />
      </div>
      <h2 className="misproyectos">Mis Proyectos</h2>
      <br />
      <br />
      <br />
      <br />
      <main>
        <Card
          repositorio="https://github.com/juliilp/mercadosolidario"
          pagina="https://mercadosolidario.vercel.app/"
          imagen={mercadosolidario}
          titulo="Mercado Solidario"
          parrafo="Éste proyecto contiene dashboard, sistema de login, implementacion de Api, auth de terceros, envio de emails, chatbot, Métodos de pago y mucho más "
        />
      </main>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <footer id="contacto">
        <br />
        <br />
        <br />
        <br />
        <div className="container-contacto">
          <a href="https://github.com/juliilp" target="blank">
            <FaGithub size="2.5em" color="FFF" />
          </a>
        </div>
        <div className="container-contacto">
          <AiOutlineMail size="2.5em" color="#FFF 0.8" />
        </div>
        <div className="container-contacto">
          <a
            href="https://www.linkedin.com/in/julian-lopez-7b9746234/"
            target="blank"
          >
            <AiOutlineLinkedin size="2.5em" color="FFF" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
