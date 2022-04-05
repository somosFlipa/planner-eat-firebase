import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";
import breakfast from "../../assets/Desayunos.svg"

const CookingRecipe = () => {
  const [recipe, setRecipe] = useState([])
const listRecipe = []
 useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "cookingRecipe"));
 data.docs.map(i => { listRecipe.push(i.data())})
 setRecipe(listRecipe)
    };
  obtenerDatos();
  }, []);
console.log(recipe)
// Hacer un array y luego guardar en use state
return(
  <>
    <h2>Seleccioná los platos que quieres en tu menú.</h2>
    <div>
      <img src={breakfast} alt="" />
      <img src={breakfast} alt="" />
      <img src={breakfast} alt="" />
      <img src={breakfast} alt="" />
    </div>
      
    {
      recipe.map((breakfast)  =>{
        return(
          <div>
            <p>nombre:{breakfast.Nombre}</p>
            <p>dificultad:{breakfast.Dificultad}</p>
            
            <p>Acompañantes:{breakfast.Acompañantes}</p>
            <p>Bebidas:{breakfast.Bebidas}</p>
            <p>Comida:{breakfast.Comida}</p>
            <p>Nacionalidad:{breakfast.Nacionalidad}</p>
            <p>paso1: {breakfast.Pasos[0]}</p>
            <p>paso2: {breakfast.Pasos[1]}</p>
            <p>paso3: {breakfast.Pasos[2]}</p>
            <p>paso4: {breakfast.Pasos[3]}</p>
            <p>paso5: {breakfast.Pasos[4]}</p>
            <p>SubCategoria: {breakfast.SubCategoria}</p>
            <p>TiempoCoccion:{breakfast.TiempoCoccion}</p>
            <p>TiempoPreparacion: {breakfast.TiempoPreparacion}</p>
            <p>Tips: {breakfast.Tips}</p>
            <br />
            
            
          </div>

        )
          
      })
    }
      
    
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
)
};

export default CookingRecipe