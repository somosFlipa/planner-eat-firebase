import React from 'react';
import { Link } from 'react-router-dom';
import './OpinionModal.css'


function OpinionModal({opinionModal, setOpinionModal}) {

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
                <textarea id="w3review" name="w3review" placeholder='Escribí Aquí por ej: No me gusta el tomate' >
                </textarea>
                <div className='btn-enviar'>
                    <Link to="/Fin">Enviar</Link>
                </div>
            </div>
            </div>
        )
    )
}

export default OpinionModal
