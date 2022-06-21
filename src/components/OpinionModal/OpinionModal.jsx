import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './OpinionModal.css';
import {RepiceContext} from "../../Context/RecipeContext.jsx";


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
                <div className='btn-enviar'>
                    <Link to="/Fin" onClick={()=>{
                            saveMessagesave();
                            }} >Enviar
                    </Link>
                </div>
            </div>
            </div>
        )
    )
}

export default OpinionModal
