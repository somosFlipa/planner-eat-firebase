import React, { useState } from 'react';

import breakfast from "../../assets/Desayunos.svg";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.svg";
import dinner from "../../assets/Cenas.svg";
import ViewFood from '../ViewFood/ViewFood';
import Foods from '../Foods/Foods';

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
                            Dificultad: i.Dificultad, Tiempo: i.TiempoCoccion + i.TiempoPreparacion})
                        setComida(arrayFilter)
                        }
                }
            })
        })
    }
    console.log("comida: ",comida)
    // ListItems

    return (
        <>
            <button id="breakfast"  onClick={()=>{btn1("DESAYUNO")}}><img src={breakfast} alt="" /></button>
            <button id="lunch" onClick={()=>{btn1("ALMUERZO")}}><img src={lunch} alt="" /></button>
            <button id="afternoon" onClick={()=>{btn1("MERIENDA")}}><img src={afternoon} alt="" /></button>
            <button id="dinner" onClick={()=>{btn1("CENA")}}><img src={dinner} alt="" /></button>

            {
                recipe.map(r => {
                    return(
                        <>
                            <p>Nombre: {r.Nombre}</p>
                            <p>Tiempo: {r.TiempoCoccion + r.TiempoPreparacion}</p>
                            <p>Dificultad: {r.Dificultad}</p>
                        </>
                    ) 
                }) ? 
                comida.map(c => {
                    return(
                        <>
                            <p>Nombre: {c.nombre}</p>
                            <p>Tiempo: {c.Tiempo}</p>
                            <p>Dificultad: {c.Dificultad}</p>
                        </>
                    ) 
                }) :
                <p>no ahi nada</p>
            }
            {/* <Foods recipe={recipe} comida={comida}/> */}
        </>


        
    )
}

export default BtnFoods