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

function BtnFoods() {
  
  const {checkbox,recipe,reiniciar } = useContext(RepiceContext)

  const [comida, setComida] = useState([]);
  const [opinionModal, setOpinionModal] = useState(false);

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
      
      
    }
    

    useEffect(()=>{
      
      btnFood()
      
    },[])

    // Modal de opinion
    function btnOpinion () {
      setOpinionModal(true)
    }

    // Paginacion (entre desayuno, almuerzo, merienda y cena)
    function paginacionPrevious(comida) {
      let breakfast = document.querySelector('#breakfast')
      let lunch = document.querySelector('#lunch')
      let afternoon = document.querySelector('#afternoon')
      let dinner =  document.querySelector('#dinner')
      
      if (comida.length === 12) {
        breakfast.classList.add("agregarBoton")
        lunch.classList.remove("agregarBoton")
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 18) {
        lunch.classList.add("agregarBoton")
        afternoon.classList.remove("agregarBoton")
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 24) {
        afternoon.classList.add("agregarBoton")
        dinner.classList.remove("agregarBoton")
        return (btnFood("MERIENDA"))
      }

    } 
    

    function paginacionNex(comida) {
      let breakfast = document.querySelector('#breakfast')
      let sacar = document.querySelector('.agregarBoton')
      sacar.classList.remove("agregarBoton")
      
      let lunch = document.querySelector('#lunch')
      let afternoon = document.querySelector('#afternoon')
      let dinner =  document.querySelector('#dinner')
      
      if (comida.length === 0) {
        breakfast.classList.add("agregarBoton")
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 11) {
        breakfast.classList.remove("agregarBoton")
        lunch.classList.add("agregarBoton")
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 12) {
        lunch.classList.remove("agregarBoton")
        afternoon.classList.add("agregarBoton")
        return btnFood("MERIENDA")
      }
      if (comida.length === 18) {
        afternoon.classList.remove("agregarBoton")
        dinner.classList.add("agregarBoton")
        return btnFood("CENA")
      }

    }

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
            <img className="img-comidas-hover agregarBoton" src={breakfast} alt="" />
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
          comida.length === 0 || comida.length === 11?
          <BtnPrevious to="/Welcome" /> :
          <button className="btn-anterior-comida" onClick={ () => paginacionPrevious(comida)}>Anterior</button>
        }
        {
          comida.length === 24 ?
          <button className="btn-finalizar-comida"onClick={btnOpinion}>FINALIZAR</button> :
          <button id="btn-siguiente-comida"onClick={ () => paginacionNex(comida)}>Siguiente</button> 
          
        }
        
      </div>
      <OpinionModal opinionModal={opinionModal} setOpinionModal={setOpinionModal}/>
    </>
  );
  
}

export default BtnFoods;

