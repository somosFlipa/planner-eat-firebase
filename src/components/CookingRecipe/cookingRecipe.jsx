import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";
//  import Foods from "../Foods/Foods";
import BtnFoods from "../BtnFoods/BtnFoods";



const CookingRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const listRecipe = [];
  

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "cookingRecipe"));
      data.docs.map((i) => {
        listRecipe.push(i.data());
      });
      setRecipe(listRecipe);
    };
    obtenerDatos();
  }, []);


  useEffect( () =>{

    // recipe.map(i =>{
    //   i.Comida.filter(z => {
    //     // console.log(i.Nombre)
    //     // console.log(z == "CENA")
    //     if ((z === "CENA") === true) {
    //       console.log(i.Nombre)
    //     }
    //   })
    // })
    

  }, [recipe])

  return (
    <>
      <h2>Seleccioná los platos que quieres en tu menú.</h2>
      <BtnFoods recipe={recipe}/>
      
      {/* <Foods recipe={recipe}/> */}

      
      {/* <p>Name</p>
        <h1>{recipe.Nombre}</h1>
        <p>Acompañantes</p>
        <p>{recipe.Acompañantes}</p>
        <p>Bebifa</p>
        <p>{recipe.Bebidas}</p>
        <p>Comida</p>
        <p>{recipe.Comida}</p>
        <p>Dificultad</p>
        <p>{recipe.Dificultad}</p>
        <p>Nacionalidad</p>
        <p>{recipe.Nacionalidad}</p>
        <p>Pasos</p>
        <p>{recipe.Pasos[0]}</p>
        <p>{recipe.Pasos[1]}</p>
        <p>{recipe.Pasos[2]}</p>
        <p>{recipe.Pasos[3]}</p>
        <p>{recipe.Pasos[4]}</p>
        <p>Subcategoria</p>
        <p>{recipe.SubCategoria}</p>
        <p>Tiempo de Cocción</p>
        <p>{recipe.TiempoCoccion}</p>
        <p>Tiempo de Preparacion</p>
        <p>{recipe.TiempoPreparacion}</p>
        <p>Tiempo total</p>
        <p>{recipe.TiempoCoccion + recipe.TiempoPreparacion}</p>
        <p>tips</p>
        <p>{recipe.Tips}</p> */}
    </>
  );
};

export default CookingRecipe;