import React, {useEffect, useState } from "react";

import breakfast from "../../assets/Desayunos.png";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.jpg";
import dinner from "../../assets/Cenas.jpg";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";

import "./BtnFoods.css";
import  OpinionModal from '../OpinionModal/OpinionModal'



function BtnFoods({ recipe }) {
    const [comida, setComida] = useState([]);
    const [opinionModal, setOpinionModal] = useState(false);
    let arrayFilter= [];

  // fuencion para los botones
    async function btnFood(food) {
      recipe.map((i) => {
        i.Comida.filter((z) => {
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
              });
              setComida(arrayFilter);
            }
          }
        });
      });
    }

    // Modal de opinion
    function btnOpinion () {
      setOpinionModal(true)

    }

  return (
    <>
      <p>Comensales: </p>

      {
        // comida.length < 1 ?
        //   btnFood("DESAYUNO") :

        <>
          <button
            id="breakfast"
            onClick={() => {
              btnFood("DESAYUNO");
            }}
          >
            <img className="img-comidas-hover" src={breakfast} alt="" />
          </button>
          <button
            id="lunch"
            onClick={() => {
              btnFood("ALMUERZO");
            }}
          >
            <img className="img-comidas-hover" src={lunch} alt="" />
          </button>
          <button
            id="afternoon"
            onClick={() => {
              btnFood("MERIENDA");
            }}
          >
            <img className="img-comidas-hover" src={afternoon} alt="" />
          </button>
          <button
            id="dinner"
            onClick={() => {
              btnFood("CENA");
            }}
          >
            <img className="img-comidas-hover" src={dinner} alt="" />
          </button>
        </>
      }

      {comida.map((c) => {
        return (
          <>
            <Card
              nombre={c.Nombre}
              tiempo={c.Tiempo}
              dificultad={c.Dificultad}
              ingredientes={c.Ingredientes}
            />
          </>
        );
      })}
      <div>
        <BtnPrevious to="/Welcome" />
        <button onClick={btnOpinion}>Siguiente</button>
      </div>
      <OpinionModal opinionModal={opinionModal} setOpinionModal={setOpinionModal}/>
    </>
  );
}

export default BtnFoods;


 

      // const resetaComida = collection(db, "cookingRecipe")
      // const desayuno = query(resetaComida, where("Comida","array-contains","DESAYUNO"))
      // // const cena = query(resetaComida, where("Comida","array-contains","CENA"))
      // const querySnapshot = await getDocs(desayuno);
      // querySnapshot.forEach((doc) => {
      //   // setcategoDeayuno(doc.data());
      //   categoDeayuno.push(doc.data())
        
      // });
      // console.log("desayuno", categoDeayuno)


      
    // async function btnFood(food) {
    //   const resetaComida = collection(db, "cookingRecipe")
    //   // const desayuno = query(resetaComida, where("Comida","array-contains","DESAYUNO"))
    //   const cena = query(resetaComida, where("Comida","array-contains","CENA"))
    //   const querySnapshot = await getDocs(cena);
    //   querySnapshot.forEach((doc) => {
    //     // setcategoCena(doc.data());
    //     categoCena.push(doc.data())
    //     // console.log("cena", doc.data())
    //   });
    //   console.log("cena", categoCena)
    // }
    
    // console.log("desayuno", categoDeayuno.Nombre)