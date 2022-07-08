import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './OpinionModal.css';
import { RepiceContext } from "../../Context/RecipeContext.jsx";
import emailjs from '@emailjs/browser';

function OpinionModal({ opinionModal, setOpinionModal }) {

    const { addToMendaje } = useContext(RepiceContext)
    const { guardar, guardarMensaje, datos, comensales } = useContext(RepiceContext)
    const [state, setState] = useState({});

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
        addToMendaje(state);

    }
    
    // console.log(addToMendaje(state))
    console.log(guardarMensaje.map(e => e.mensaje))
    // function saveMessagesave() {
    //     addToMendaje(state);
    // }

    // array de todas la recetas que selecciona el ususrio
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
        comentario.value = guardarMensaje
        setTimeout(() => {
        emailjs.sendForm('service_bc397fi', 'template_ivkegio', e.target, '7fxso87HjOOcbYriT')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text))
        }, 200);
    };

    return (
        opinionModal && (
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
                    {/* <div className='btn-enviar'>
                    <Link to="/Fin" onClick={()=>{
                            saveMessagesave();
                            }} >Enviar
                    </Link>
                </div> */}
                    <div className='div-form'>

                        <h1 className='title-form'>Contact Us</h1>

                        <form className='form-mail' onSubmit={sendEmail}>

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


                            




                            {/* <label>Message</label>

                            <textarea name="user_message" id="" cols="30" rows="10"></textarea>

                            <hr /> */}

                            <button>Send</button>

                        </form>

                    </div>
                </div>
            </div>
        )
    )
}

export default OpinionModal
