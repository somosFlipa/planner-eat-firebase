import React,{useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";


function Card(props) {

  const [ingredients, setIngredients] = useState([]);
  const listRecipe = [];

  useEffect(() => {
    const obtenerDatos = async () => {
      
        const data = await getDocs(collection(db, "Ingredients"));
        data.docs.map((i) => {
          listRecipe.push({"datos": i.data(),"id":i.id});
          // console.log("i: ", i.id)
        });
        setIngredients(listRecipe);
    };
    obtenerDatos();
  }, []);

  console.log(props.ingredientes)
  
  function btn (id) {
    // console.log("comida: ",recipe[2].Ingredients[0]._key.path.segments[6])
    // console.log(props.ingredientes[0]._key.path.segments[6] === ingredients[0].id)
    // console.log(ingredients[0].id)  

    
    // ingredients.map((i) => {
    //   // console.log(ingredients)
    //     i.datos.filter(z => {
    //          if ((z === id) === true) {
    //            console.log(i.id)
    // //           listRecipe.filter(s => s.foodTime === food)
    // //             if (!listRecipe.includes(i.Nombre)) { 
    // //               listRecipe.push({FoodTime: food, Nombre:i.Nombre,
    // //                     Dificultad: i.Dificultad, Tiempo: i.TiempoCoccion + i.TiempoPreparacion,
    // //                     Ingredientes: i.Ingredients
    // //                 })
    // //                 setIngredients(listRecipe)
    // //                 }
    //          }
    //      })
    // })
  }
  
  
  
  return (
    <>
        <p>Nombre: {props.nombre}</p>
        <p>Tiempo: {props.tiempo}</p>
        <p>Dificultad: {props.dificultad}</p>
        <button onClick={()=>{btn()}}>Ver más</button>
    </>
  )
}

export default Card