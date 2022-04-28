import React, { useState } from 'react';

import breakfast from "../../assets/Desayunos.svg";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.svg";
import dinner from "../../assets/Cenas.svg";

import Card from '../Card/Card';
import BtnPrevious from '../BtnPrevious/BtnPrevious';

function BtnFoods({recipe}) {

    let arrayFilter = []
    const [comida, setComida] = useState([]);

    // fuencion para los botones
    
    async function btnFood (food) {
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

    return (
        <>
        <p>Comensales: </p>

        {
            // comida.length < 1 ? 
            //   btnFood("DESAYUNO") :
        
            <>
                <button id="breakfast"  onClick={()=>{btnFood("DESAYUNO")}}><img src={breakfast} alt="" /></button>
                <button id="lunch" onClick={()=>{btnFood("ALMUERZO")}}><img src={lunch} alt="" /></button>
                <button id="afternoon" onClick={()=>{btnFood("MERIENDA")}}><img src={afternoon} alt="" /></button>
                <button id="dinner" onClick={()=>{btnFood("CENA")}}><img src={dinner} alt="" /></button>
            </>
        }{
            comida.map(c => {

                return(
                    <>
                        <Card nombre={c.Nombre} tiempo= {c.Tiempo} dificultad={c.Dificultad} ingredientes={c.Ingredientes} />
                    </>
                ) 
            }) 

        }
        <div>
            <BtnPrevious  to='/Welcome'/>
        </div>
        

        </>



    )
}

export default BtnFoods