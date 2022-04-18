import React, { useState } from 'react';

import breakfast from "../../assets/Desayunos.svg";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.svg";
import dinner from "../../assets/Cenas.svg";

import Card from '../Card/Card';

function BtnFoods({recipe}) {

    let arrayFilter = []
    const [comida, setComida] = useState([]);

    // fuencion para los botones
    
    function btn1 (food) {

        recipe.map((i) => {
            i.Comida.filter(z => {
                if ((z === food) === true) {
                    arrayFilter.filter(s => s.foodTime === food)
                    if (!arrayFilter.includes(i.Nombre)) { 
                        arrayFilter.push({FoodTime: food, Nombre:i.Nombre,
                            Dificultad: i.Dificultad, Tiempo: i.TiempoCoccion + i.TiempoPreparacion,
                            Ingredientes: i.Ingredients
                        })
                        setComida(arrayFilter)
                        }
                }
            })
        })
    }
    // console.log("comida: ",recipe[2].Ingredients[0]._key.path.segments[6])
    // ListItems


    return (
        <>
            <button id="breakfast"  onClick={()=>{btn1("DESAYUNO")}}><img src={breakfast} alt="" /></button>
            <button id="lunch" onClick={()=>{btn1("ALMUERZO")}}><img src={lunch} alt="" /></button>
            <button id="afternoon" onClick={()=>{btn1("MERIENDA")}}><img src={afternoon} alt="" /></button>
            <button id="dinner" onClick={()=>{btn1("CENA")}}><img src={dinner} alt="" /></button>

            {
                comida.length === 0 ? 
                <>
                    <p>Eliga su menu para cada día:</p>
                    <p>Nombre: JUGO NARANJA CON ZANAHORIA</p>
                    <p>Tiempo: 10</p>
                    <p>Dificultad: FÁCIL</p>
                </>
                :
                comida.map(c => {
                    return(
                        <>
                            <Card nombre={c.Nombre} tiempo= {c.Tiempo} dificultad={c.Dificultad} ingredientes={c.Ingredientes} />
                        </>
                    ) 
                }) 

            }
            
        </>


        
    )
}

export default BtnFoods