import React from 'react';
import './Modal.css';


function Modal({ estadoModal, setEstadoModal, description, nombre }) {
    // console.log(description)
    // console.log(nombre)
    return (
        <>
            {estadoModal &&
                <div className='modal'>
                    <div className='containerModal'>
                        <button onClick={()=>{setEstadoModal(false)}}>X</button>
                        <h2>{nombre}</h2>
                        <h3>Ingrediente:</h3>
                        {
                            description.map(i => {
                                // console.log(i)
                                i.map(z => {
                                    return(
                                        <li>{z.datos.name}</li>
                                    )
                                    // console.log(z.datos.name)
                                })
                                
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Modal