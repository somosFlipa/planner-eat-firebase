import React from 'react';
import { Link } from 'react-router-dom';

const BtnPrevious = (prop) =>{

    return (
        <>
            <Link to={prop.to}>Anterior</Link>
        </>

    )

}

export default BtnPrevious