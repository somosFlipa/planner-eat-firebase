import React,{useContext} from 'react';
import logo from '../../assets/Logo 2021-1.png'
import "./Fin.css"
import fondofondo from "../../assets/Rectangle.png"
//import axios from 'axios';
import {RepiceContext} from "../../Context/RecipeContext.jsx";
//import emailjs from '@emailjs/browser';
    
function Fin() {

    const { guardar, guardarMensaje, datos, comensales } = useContext(RepiceContext)

    // console.log("resetas",guardar)
    // console.log("mensaje",guardarMensaje)
    // console.log("nombre",datos[0].user_name)
    // console.log("email",datos[0].user_email)
    // console.log("comensales",comensales)
    // let data = [guardar, guardarMensaje, datos, comensales]
    // console.log("datos",data)

    // function sendEmail() {
    //     // e.preventDefault();
    //     console.log("envio")
    //     console.log("nombre",datos[0].user_name)
    //     console.log("resetas",guardar)
    //     console.log("mensaje",guardarMensaje)
    //     console.log("nombre",datos)
    //     console.log("comensales",comensales)
    //     emailjs.sendForm('service_bc397fi', 'template_ivkegio',datos[0].user_name, '7fxso87HjOOcbYriT')
    //         .then(result => console.log(result.text))
    //         .catch (error => console.log(error.text))
    // };

    // function sendEmail() {
    //     console.log("nombre",datos,
    //                 "recetas",guardar, 
    //                 "mensaje",guardarMensaje,
    //                 "comensales", comensales)
        
    //     let data = [guardar, guardarMensaje, datos, comensales]
    //     const json = axios.post('http://localhost:8080/api/form',data)
    //     .then(res=>{
    //         console.log(res)
    //     })
    //     console.log(json)
    // }



    return (
        <>
        <div className='margin-pag-fin' >
            <div className='flex-fondo-fin'>
                <div className='logo-fin'>
                    <img src={logo} alt="" />
                </div>
                <div className='div-fin-h2-p-p'>
                    {/* {sendEmail} */}
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