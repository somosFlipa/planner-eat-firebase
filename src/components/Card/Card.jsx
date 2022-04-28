import React,{useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";


function Card(props) {

  const [ingredients, setIngredients] = useState([]);
  const [description , setDescription] = useState([]);
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

  function btn () {
    let h = []
    let g = undefined
    const e = props.ingredientes.map(i => {
      // console.log(i)
      g = ingredients.filter(f => {
        return f.id === i.id

      })
      h.push(g)
      
    })
    setDescription(h)
    
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
