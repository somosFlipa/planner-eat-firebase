import React,{useContext} from 'react';
import logo from '../../assets/Logo 2021-1.png'
import "./Fin.css"
import fondofondo from "../../assets/Rectangle.png"
import axios from 'axios';
import {RepiceContext} from "../../Context/RecipeContext.jsx";
    
function Fin() {

    const { guardar, guardarMensaje, datos} = useContext(RepiceContext)

    function sendEmail() {
        console.log("nombre",datos,
                    "recetas",guardar, 
                    "mensaje",guardarMensaje)
        
        let data = [guardar, guardarMensaje, datos]
        const json = axios.post('http://localhost:8080/api/form',data)
        .then(res=>{
            console.log(res)
        })
        console.log(json)
    }

    return (
        <>
        <div className='margin-pag-fin' >
            <div className='flex-fondo-fin'>
                <div className='logo-fin'>
                    <img src={logo} alt="" />
                </div>
                <div className='div-fin-h2-p-p'>
                    {sendEmail()}
                    <h2>¡Muchas gracias!</h2>
                    <p className='p-div-info-14'>Ya te conocemos mucho mejor {":)"} </p>
                    <p className='p-div-info-12'>En breve vas a recibir en tu correo la información relevante, Lista de compras y las recetas <br/ >completas para que puedas armar tu menú.</p>
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