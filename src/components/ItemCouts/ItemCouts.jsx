import  React, {useState, useContext} from "react";
import './ItemCouts.css';
import {RepiceContext} from "../../Context/RecipeContext.jsx";

function ItemCouts({ stock, initial}) {

    const [counter, setCounter] = useState(initial);

    const {addToCantidad} = useContext(RepiceContext)

    addToCantidad(counter)

    // console.log(document.querySelectorAll("#contador"))
    // console.log( document.querySelectorAll("#contador")[0].innerText  === "2" )
    // function reiniciar() {
    //     const amount = document.querySelectorAll("#contador")
    //     for (let i = 0; i < amount.length; i++) {
    //         const restart =  document.querySelectorAll(".checkbox")[i].innerHTML
            
    //         if(restart !== "1"){
    //             document.querySelectorAll("#contador")[i].innerHTML  = "1"
                
    //         }

    //     } 
    // }

    return (
        <div className="contador">
            <button className="btn-menos" onClick={() => {
                if (counter > initial) {
                    setCounter(counter - 1);
                }
                }}> - </button>

            <p id="contador">{counter}</p>
            <button className="btn-mas" onClick={() => { 
                    if (counter < stock) {
                    setCounter(counter + 1);
                }
            }}> + </button>
        </div>
    );
}

export default ItemCouts;
