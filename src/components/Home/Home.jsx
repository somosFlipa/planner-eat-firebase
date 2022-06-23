import React from "react";
import Form from '../Form/Form';
import "./Home.css";
import logo from '../../assets/Logo 2021-1.png'
import logodesktop from "../../assets/Logo.png"
import desktop from "../../assets/Social-media-pana-1.png"

const Home = () => {
  return (
    <>
  
    <div className="Home" >
      <div className="HomeText">
        
        <div className='logo-home'>
          <img src={logo} alt="" />
        </div>
        <h1 >¡Hola!</h1>
        <p>Bienvenido a tu planificador </p>
        <p>PlannerEat</p>
        <Form/>
        
      </div>
    </div>

    <div className="top-desktop">
      <div className='logo-desktop'>
        <img src={logodesktop} alt="" />
      </div>
    </div>

    <div className="pantalla-desktop">
      <div className="texto-desktop">
        <h2>Planner Eat</h2>
        <p>No podemos mostrarte el formulario de Planner <br/> Eat desde la versión web, ya que se encuentra <br/> optimizado para mobile. Por favor ingresá desde <br/> tu celular para acceder al contenido. </p>
      </div>

      <div className="img-desktop">
        <img src={desktop} alt="AVISO, pagina solo aceptada para dispositivos MOBILE!"/>
      </div>
    </div>

    <div className="footer-desktop">
      <div> </div>
    </div>

    </>
  );
};



export default Home;

