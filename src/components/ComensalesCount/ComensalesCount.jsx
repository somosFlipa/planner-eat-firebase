import  React, { useState, useContext } from "react";
import './ComensalesCount.css';

import {RepiceContext} from "../../Context/RecipeContext.jsx";

function ComensalesCount({ stock, initial}) {

    const [counter, setCounter] = useState(initial);

    const {addToComensales} = useContext(RepiceContext)

    addToComensales(counter)
    
    return (
        <div className="contador-comensales">
            <button className="btn-menos-comensales" onClick={() => {
                if (counter > initial) {
                    setCounter(counter - 1);
                }
            }}> - </button>

            <p id="contador" >{ counter }</p>
            
            <button className="btn-mas-comensales" onClick={() => { 
                    if (counter < stock) {
                    setCounter(counter + 1);
                }
            }}> + </button>

        </div>
    );
}

export default ComensalesCount;