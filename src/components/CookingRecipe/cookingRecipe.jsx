import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";
import BtnFoods from "../BtnFoods/BtnFoods";


const CookingRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const listRecipe = [];

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "cookingRecipe"));
      data.docs.map((i) => {
        listRecipe.push(i.data());
        // console.log(i.data())
      });
      setRecipe(listRecipe);
    };
    obtenerDatos();
  }, []);
  
  
  return (
    <>
      <h2>Seleccioná los platos que quieres en tu menú.</h2>
      <BtnFoods recipe={recipe}/>
    </>
  );
};

export default CookingRecipe;