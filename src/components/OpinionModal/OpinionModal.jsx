import React, { useContext, useState } from 'react';
import './OpinionModal.css';
import { RepiceContext } from "../../Context/RecipeContext.jsx";
import emailjs from '@emailjs/browser';
import {useNavigate } from "react-router-dom";

function OpinionModal({ opinionModal, setOpinionModal }) {

    const { addToMendaje } = useContext(RepiceContext)
    const { guardar, guardarMensaje, datos, comensales } = useContext(RepiceContext)
    const [state, setState] = useState({});
    const history = useNavigate()

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    let arrayMensaje = guardarMensaje.map(e => e.mensaje)

    function saveMessagesave() {
        addToMendaje(state);
    }

    let arrayRecetas =  guardar.map(e=>(e.id))


    const sendEmail = (e) => {
        e.preventDefault();
        let nema = document.getElementById("input-nema")
        let email = document.getElementById("input-emil")
        let recet = document.getElementById("input-recet")
        let comensal = document.getElementById("input-comensal")
        let comentario = document.getElementById("w3review")
        nema.value = datos[0].user_name
        email.value = datos[0].user_email
        comensal.value = comensales 
        recet.value = arrayRecetas
        comentario.value =  arrayMensaje[0]
        setTimeout(() => {
        emailjs.sendForm('service_bc397fi', 'template_ivkegio', e.target, '7fxso87HjOOcbYriT')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text))
        }, 200);

        history("/Fin")
    };

    return (
        opinionModal && (
            <form className='form-mail' onSubmit={sendEmail}>
                <div className="divModal">
                    <div className="modalContainer">
                        <button
                            onClick={() => {
                                setOpinionModal(false);
                            }}
                        >
                            X
                        </button>
                        <h3>¿Quéres dejarnos un comentario?</h3>
                        <textarea id="w3review" placeholder='Escribí Aquí por ej: Me encantaria que agreguen recetas veganas.'
                            name="mensaje" onChange={(e) => handleChange(e)}>
                        </textarea>
                        <div className='div-form'>
                            <h1 className='title-form'>Contact Us</h1>

                            <label>Name</label>
                            <input type="text" name='user_name' id="input-nema"/>
                            <hr />
                            <label>Email</label>
                            <input type="email" name='user_email' id="input-emil" />
                            <hr />
                            <label>recet</label>
                            <input type="text" name='user_recet' id="input-recet"/>
                            <hr />
                            <label>comendal</label>
                            <input type="text" name='user_comensal' id="input-comensal"/>
                        </div>

                            <button id='btn-enviar' onClick={()=>{
                                saveMessagesave();
                            }}>Enviar</button>


                    </div>
                </div>
            </form>
        )
    )
}

export default OpinionModal
