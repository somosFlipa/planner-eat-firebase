import  React, {useState, useContext} from "react";
import './ItemCouts.css';
// import {RepiceContextProvider} from "../../Context/RecipeContext.jsx";

function ItemCouts({ stock, initial}) {

    const [counter, setCounter] = useState(initial);

    // console.log(counter)
    return (
        <div className="contador">
            <button className="btn-menos" onClick={() => {
                if (counter > initial) {
                    setCounter(counter - 1);
                }
                }}> - </button>

            <p>{counter}</p>
            <button className="btn-mas" onClick={() => { 
                    if (counter < stock) {
                    setCounter(counter + 1);
                }
            }}> + </button>
        </div>
    );
}

export default ItemCouts;
