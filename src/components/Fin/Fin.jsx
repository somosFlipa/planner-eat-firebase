import React,{useContext} from 'react';
import logo from '../../assets/Logo 2021-1.png'
import "./Fin.css"
import fondofondo from "../../assets/Rectangle.png"
    
function Fin() {

    return (
        <>
        <div className='margin-pag-fin'>
            <div className='flex-fondo-fin'>
                <div className='logo-fin'>
                    <img src={logo} alt="" />
                </div>
                <div className='div-fin-h2-p-p'>
                    <h2>¡Muchas gracias!</h2>
                    <p className='p-div-info'>Ya te conocemos mucho mejor {":)"} </p>
                    <p className='p-div-info'>En breve vas a recibir en tu correo la información relevante, Lista de compras y las recetas <br/ >completas para que puedas armar tu menú.</p>
                </div>

            </div> 
            <div className='fondofruta'>
                <img src={fondofondo} alt="" />
            </div>
        </div>
        </>
    )
}

export default Fin