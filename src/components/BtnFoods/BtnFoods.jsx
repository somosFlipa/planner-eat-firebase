import React, { useEffect, useState, useContext } from "react";
import {RepiceContextProvider} from "../../Context/RecipeContext.jsx"

import breakfast from "../../assets/Desayunos.png";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.jpg";
import dinner from "../../assets/Cenas.jpg";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";

import "./BtnFoods.css";
import  OpinionModal from '../OpinionModal/OpinionModal';
import ItemCouts from '../ItemCouts/ItemCouts'

function BtnFoods({ recipe }) {
  const [guardar, setguardar]= useState([])
  
  const borrar =(id)=> {
      const borra = guardar.findIndex(item => item.id === id);
      if (guardar[borra].id === 1) {
          setguardar(guardar.filter(i => i.id !== id))
      } else {
          setguardar(guardar.map(p => p.id === id ? {...p, id: p.id - 1} : p));
      }
    
  }

  const addTo =(recipe)=> {
      let found = guardar.find((recipe) => recipe.idMenu === recipe.id);
      if (found === undefined) {
          setguardar([
              ...guardar,
              {
                  id: recipe,
                  
              }]);
      }
  }
  console.log(guardar)

    const [comida, setComida] = useState([]);
    const [opinionModal, setOpinionModal] = useState(false);

    let arrayFilter= [];

  // fuencion para los botones
    async function btnFood(food) {
      recipe && recipe.map((i) => {
        i.Comida && i.Comida.filter((z) => {
          // console.log(z === undefined)
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
      
      // actualizacion del tilde por paaginación
      
      document.getElementById("checkbox").checked = 0
      
      
    }

    useEffect(()=>{
      btnFood()
      setComida(arrayFilter)
      
    },[])

    // Modal de opinion
    function btnOpinion () {
      setOpinionModal(true)
    }

    // Paginacion (entre desayuno, almuerzo, merienda y cena)
    function paginacionPrevious(comida) {
      if (comida.length === 12) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 18) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 24) {
        return (btnFood("MERIENDA"))
      }

      
    }

    function paginacionNex(comida) {
      
      if (comida.length === 0) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 11) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 12) {
        return btnFood("MERIENDA")
      }
      if (comida.length === 18) {
        return btnFood("CENA")
      }

    }

    function name() {
      document.querySelector("#btn-siguiente-comida").addEventListener("click", () => {
        document.querySelectorAll(".checkbox").checked = 0
        // alert("siguente")
      })
    }
  

  //  console.log(document.querySelector("#btn-siguiente-comida"))
  return (
    <>
      <p>Comensales: </p>
      <ItemCouts stock={4} initial={1} addTo={addTo} />
      {
        // comida.length < 1 ?
        //   btnFood("DESAYUNO") :
        <>

          <button
            id="breakfast"
            className="btnActualizar"
            onClick={() => {
              btnFood("DESAYUNO");
            }}
          >
            <img className="img-comidas-hover" src={breakfast} alt="" />
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
        // comida.length === 0 ?
        //   btnFood("DESAYUNO") :
        comida.map((c) => {
          return (
            <>
              <Card
                key={c}
                nombre={c.Nombre}
                tiempo={c.Tiempo}
                dificultad={c.Dificultad}
                ingredientes={c.Ingredientes}
                url={c.Url}
                addTo={addTo}
                borrar={borrar}
                name={name}
              />
            </>
          );
        })
      }
      <div className="btns-div">
        {
          comida.length === 0 || comida.length === 11 ?
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

