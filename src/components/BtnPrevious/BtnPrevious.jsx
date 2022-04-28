import React from 'react';
import { Link } from 'react-router-dom';
import './BtnPrevious.css'

const BtnPrevious = (prop) =>{


    return (
        <>

            <Link className="btn-previous" to={prop.to}>Anterior</Link>
        </>

    )

}

export default BtnPrevious