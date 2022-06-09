import  React, { useState, useContext } from "react";
import './ComensalesCount.css';

import {RepiceContext} from "../../Context/RecipeContext.jsx";

function ComensalesCount({ stock, initial}) {

    const [counter, setCounter] = useState(initial);

    const {addToComensales} = useContext(RepiceContext)

    let contador = document.querySelectorAll("#contador")
    
    for (let i = 0; i < contador.length; i++) {
        contador =  document.querySelectorAll("#contador")[i].textContent
        contador++
        --contador
    }

    // const contador = document.querySelectorAll("#contador")[0].textContent
    addToComensales(counter)

    
    console.log(counter)
    
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