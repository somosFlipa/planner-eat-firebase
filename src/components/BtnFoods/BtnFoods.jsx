import React from 'react';

import breakfast from "../../assets/Desayunos.svg";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.svg";
import dinner from "../../assets/Cenas.svg";

function BtnFoods({recipe}) {
    
    // recipe.map(i =>{
    //     i.Comida.filter(z => {
    //       // console.log(i.Nombre)
    //       // console.log(z == "CENA")
    //       if ((z === "CENA") === true) {
    //         console.log(i.Nombre)
            
    //       }
    //     })
    //   })

    // fuencion para los botones
    function btn1 () {
        recipe.map(i =>{
            i.Comida.filter(z => {
              // console.log(i.Nombre)
              // console.log(z == "CENA")
                if ((z === "DESAYUNO") === true) {
                    console.log("Desayuno: ",i.Nombre)
                    
                }
            })
        })

    }
    function btn2 () {
        recipe.map(i =>{
            i.Comida.filter(z => {
              // console.log(i.Nombre)
              // console.log(z == "CENA")
                if ((z === "ALMUERZO") === true) {
                    console.log("Almuerzo: ", i.Nombre)
                    
                }
            })
        })

    }
    function btn3 () {
        recipe.map(i =>{
            i.Comida.filter(z => {
              // console.log(i.Nombre)
              // console.log(z == "CENA")
                if ((z === "MERIENDA") === true) {
                    console.log("Merienda: ",i.Nombre)
                    
                }
            })
        })

    }
    function btn4 () {
        recipe.map(i =>{
            i.Comida.filter(z => {
                // console.log(i.Nombre)
                // console.log(z == "CENA")
                if ((z === "CENA") === true) {
                    console.log("Cena: ", i.Nombre)
                    
                }
            })
        })

    }

    return (
        <>
            <button id="breakfast"  onClick={btn1}><img src={breakfast} alt="" /></button>
            <button id="lunch" onClick={btn2}><img src={lunch} alt="" /></button>
            <button id="afternoon" onClick={btn3}><img src={afternoon} alt="" /></button>
            <button id="dinner" onClick={btn4}><img src={dinner} alt="" /></button>
        </>

        
    )
}

export default BtnFoods