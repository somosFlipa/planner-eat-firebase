import React from 'react';
import logo from '../../assets/Logo 2021-1.png'
import "./Fin.css"
import fondofondo from "../../assets/Rectangle.png"

function Fin() {

    return (
        <>
        <div className='margin-pag-fin' >
            <div className='flex-fondo-fin'>
                <div className='logo-fin'>
                    <img src={logo} alt="" />
                </div>
                <div className='div-fin-h2-p-p'>
                    <h2>¡Muchas gracias!</h2>
                    <p className='p-div-info-14'>Ya te conocemos mucho mejor {":)"} </p>
                    <p className='p-div-info-12'>En breve vas a recibir un correo por parte de nuestro equipo con la lista de compras, recetas e información extra de los platos que seleccionaste. Para que juntos armemos tu menú semanal.</p>
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