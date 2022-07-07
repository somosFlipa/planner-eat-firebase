import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './OpinionModal.css';
import {RepiceContext} from "../../Context/RecipeContext.jsx";
import emailjs from '@emailjs/browser';

function OpinionModal({opinionModal, setOpinionModal}) {

    const {addToMendaje} = useContext(RepiceContext)
    const [state, setState] = useState({});

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function saveMessagesave() {
        addToMendaje(state);
    }


   const sendEmail = (e)=>  {
        e.preventDefault();
        console.log(e)
        // emailjs.sendForm('service_bc397fi', 'template_ivkegio',e.target, '7fxso87HjOOcbYriT')
        //     .then(result => console.log(result.text))
        //     .catch (error => console.log(error.text))
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
                <div>
                    <from onSubmit={sendEmail} >
                        
                        <label>Name</label>
                        <input type="text" name="user_name"></input>
                        <br></br>
                        <label>Email</label>
                        <input type="email" neme="user_email"></input>
                        {/* <button className='btnFrom'>Enviar</button> */}
                        <input type="submit">submit</input> 
                    </from>
                </div>
            </div>
            </div>
        )
    )
}

export default OpinionModal
