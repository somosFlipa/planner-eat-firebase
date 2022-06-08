import  React, { useState } from "react";
import './ComensalesCount.css';

function ComensalesCount({ stock, initial}) {

    const [counter, setCounter] = useState(initial);

    return (
        <div className="contador-comensales">
            <button className="btn-menos-comensales" onClick={() => {
                if (counter > initial) {
                    setCounter(counter - 1);
                }
            }}> - </button>

            <p>{counter}</p>
            
            <button className="btn-mas-comensales" onClick={() => { 
                    if (counter < stock) {
                    setCounter(counter + 1);
                }
            }}> + </button>

        </div>
    );
}

export default ComensalesCount;