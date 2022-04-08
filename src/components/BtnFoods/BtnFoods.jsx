import React from 'react';

import breakfast from "../../assets/Desayunos.svg";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.svg";
import dinner from "../../assets/Cenas.svg";
import ViewFood from '../ViewFood/ViewFood';

function BtnFoods({recipe}) {

    // fuencion para los botones
    function btn1 (food) {
        recipe.map(i =>{
            i.Comida.filter(z => {
              // console.log(i.Nombre)
              // console.log(z == "CENA")
                if ((z === food) === true) {
                    return( console.log(food, i.Nombre))
                    
                }
            })
        })

    }
    
    return (
        <>
            <button id="breakfast"  onClick={()=>{btn1("DESAYUNO")}}><img src={breakfast} alt="" /></button>
            <button id="lunch" onClick={()=>{btn1("ALMUERZO")}}><img src={lunch} alt="" /></button>
            <button id="afternoon" onClick={()=>{btn1("MERIENDA")}}><img src={afternoon} alt="" /></button>
            <button id="dinner" onClick={()=>{btn1("CENA")}}><img src={dinner} alt="" /></button>

            <ViewFood recipe={recipe} btn1={btn1()}/>
        </>


        
    )
}

export default BtnFoods