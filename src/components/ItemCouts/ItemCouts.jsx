import { React, useState } from "react";
import './ItemCouts.css';
// import {RepiceContextProvider} from "../../Context/RecipeContext.jsx"


function ItemCouts({ stock, initial, addTo }) {

    const [counter, setCounter] = useState(initial);


    return (
        <div className="contador">
            <button className="btn-menos" onClick={() => {
                if (counter > initial) {
                    setCounter(counter - 1);
                }
                }}> - </button>

            <p>{counter}{addTo}</p>
            <button className="btn-mas" onClick={() => { 
                    if (counter < stock) {
                    setCounter(counter + 1);
                }
            }}> + </button>
        </div>
    );
}

export default ItemCouts;
