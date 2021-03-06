import React, { useEffect, useState, useContext } from "react";
import {RepiceContext} from "../../Context/RecipeContext.jsx";

import breakfast from "../../assets/Desayuno.png";
import lunch from "../../assets/Almuerzos.png";
import afternoon from "../../assets/Merienda.png";
import dinner from "../../assets/Cena.png";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";

import "./BtnFoods.css";
import  OpinionModal from '../OpinionModal/OpinionModal';
import ComensalesCount from "../ComensalesCount/ComensalesCount"

import {useNavigate } from "react-router-dom";

function BtnFoods() {
  
  const {checkbox,recipe,reiniciar } = useContext(RepiceContext)

  const [comida, setComida] = useState([]);
  const [opinionModal, setOpinionModal] = useState(false);

  const history = useNavigate()

  function removerBtn (food){
    let breakfast = document.querySelector('#breakfast')
    let lunch = document.querySelector('#lunch')
    let afternoon = document.querySelector('#afternoon')
    let dinner = document.querySelector('#dinner')
  
    if (food === undefined ) {
      breakfast.classList.add("agregarBoton")
      lunch.classList.remove("agregarBoton")
      afternoon.classList.remove("agregarBoton")
      dinner.classList.remove("agregarBoton")
    }

    if (food === "DESAYUNO" || food === undefined) {
      lunch.classList.remove("agregarBoton")
      afternoon.classList.remove("agregarBoton")
      dinner.classList.remove("agregarBoton")
      
    }

    if (food === "ALMUERZO") {
      breakfast.classList.remove("agregarBoton")
      afternoon.classList.remove("agregarBoton")
      dinner.classList.remove("agregarBoton")
    }

    if (food === "MERIENDA") {
      breakfast.classList.remove("agregarBoton")
      lunch.classList.remove("agregarBoton")
      breakfast.classList.remove("agregarBoton")
      dinner.classList.remove("agregarBoton")
    }
    if (food === "CENA") {
    breakfast.classList.remove("agregarBoton")
    lunch.classList.remove("agregarBoton")
    afternoon.classList.remove("agregarBoton")
    }
  }

  // fuencion para los botones
    function btnFood(food) {

      checkbox(food)
      reiniciar(food)
      let arrayFilter= [];
      recipe && recipe.map((i) => {
        i.Comida && i.Comida.filter((z) => {
          if ((z === food) === true) {
            arrayFilter.filter((s) => s.foodTime === food);
            if (!arrayFilter.includes(i.Nombre)) {
              arrayFilter.push({
                FoodTime: food,
                Nombre: i.Nombre,
                Dificultad: i.Dificultad,
                Tiempo: i.TiempoCoccion + i.TiempoPreparacion,
                Ingredientes: i.Ingredients,
                Url: i.Url
              });
              setComida(arrayFilter);
            }
          }
        });
      });
      
      setTimeout(() => {
          removerBtn(food)
      }, 100);

      
    
    }

    useEffect(()=>{
      
      btnFood()
      
    },[])

    // Modal de opinion
    function btnOpinion () {
      setOpinionModal(true)
    }

    // Paginacion (entre desayuno, almuerzo, merienda y cena)
    function paginacionPrevious(detalleComida) {
      let desayuno = detalleComida.map(e => e  === "DESAYUNO" )
      let almuerzo = detalleComida.map(e => e  === "ALMUERZO" )
      let merienda = detalleComida.map(e => e  === "MERIENDA" )
      let cena = detalleComida.map(e => e  === "CENA")

      let breakfast = document.querySelector('#breakfast')
      let lunch = document.querySelector('#lunch')
      let afternoon = document.querySelector('#afternoon')
      let dinner =  document.querySelector('#dinner')

      if (desayuno[0]) {
        history('/Welcome') 
      }
      if (almuerzo[0]) {
        breakfast.classList.add("agregarBoton")
        lunch.classList.remove("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("DESAYUNO"))
        
      }

      if (merienda[0]) {
        breakfast.classList.remove("agregarBoton")
        lunch.classList.add("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("ALMUERZO"))
        
      }

      if (cena[0]) {
        breakfast.classList.remove("agregarBoton")
        afternoon.classList.add("agregarBoton")
        lunch.classList.remove("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("MERIENDA"))
        
      }

    } 

    function paginacionNex(detalleComida) {
      let desayuno = detalleComida.map(e => e  === "DESAYUNO" )
      let almuerzo = detalleComida.map(e => e  === "ALMUERZO" )
      let merienda = detalleComida.map(e => e  === "MERIENDA" )
      let cena = detalleComida.map(e => e  === "CENA")

      let breakfast = document.querySelector('#breakfast')
      let lunch = document.querySelector('#lunch')
      let afternoon = document.querySelector('#afternoon')
      let dinner =  document.querySelector('#dinner')

      if (desayuno[0]) {
        breakfast.classList.remove("agregarBoton")
        lunch.classList.add("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("ALMUERZO"))
      }

      if (almuerzo[0]) {
        breakfast.classList.remove("agregarBoton")
        afternoon.classList.add("agregarBoton")
        lunch.classList.remove("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("MERIENDA"))
        
      }

      if (merienda[0]) {
        breakfast.classList.remove("agregarBoton")
        lunch.classList.remove("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        dinner.classList.add("agregarBoton")
        return (btnFood("CENA"))
        
      }

      if (cena[0]) {
        breakfast.classList.remove("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        lunch.classList.remove("agregarBoton")
        dinner.classList.add("agregarBoton")
        
      }

    }

    let detalleComida = comida.map(detalle => {
      
      return detalle.FoodTime
  
    })

  return (
    <>
      <p>Comensales: </p>
      <ComensalesCount stock={4} initial={1}  />
      {
        comida.length < 1 ?
          btnFood("DESAYUNO")
          :
        <>

          <button
            id="breakfast"
            className="btnActualizar"
            onClick={() => {
              btnFood("DESAYUNO");
            }}
          >
            <img className="img-comidas-hover " src={breakfast} alt="" />
          </button>
          <button
            className="btnActualizar"
            id="lunch"
            onClick={() => {
              btnFood("ALMUERZO");
            }}
          >
            <img className="img-comidas-hover" src={lunch} alt="" />
          </button>
          <button
            className="btnActualizar"
            id="afternoon"
            onClick={() => {
              btnFood("MERIENDA");
            }}
          >
            <img className="img-comidas-hover" src={afternoon} alt="" />
          </button>
          <button
            className="btnActualizar"
            id="dinner"
            onClick={() => {
              btnFood("CENA");
            }}
          >
            <img className="img-comidas-hover" src={dinner} alt="" />
          </button>
        </>
      }

      {
        comida.map((c, key) => {
          return (
            <>
              <Card
                key={key.id}
                nombre={c.Nombre}
                tiempo={c.Tiempo}
                dificultad={c.Dificultad}
                ingredientes={c.Ingredientes}
                url={c.Url}
              />
            </>
          );
        })
      }
      <div className="btns-div">
        {
          detalleComida.length === 0 || detalleComida.map(e => e  === "DESAYUNO" )  ?
          <button className="btn-anterior-comida" onClick={ () => paginacionPrevious(detalleComida)}>Anterior</button> :
          <BtnPrevious to="/Welcome" /> 
        }
        {
          detalleComida[0] === "CENA" ?
          <button className="btn-finalizar-comida"onClick={btnOpinion}>FINALIZAR</button> :
          <button id="btn-siguiente-comida"onClick={ () => paginacionNex(detalleComida)}>Siguiente</button> 
          
        }
        
      </div>
      <OpinionModal opinionModal={opinionModal} setOpinionModal={setOpinionModal}/>
    </>
  );
  
}

export default BtnFoods;

