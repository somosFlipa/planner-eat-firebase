import React, { useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";
import BtnFoods from "../BtnFoods/BtnFoods";
import {RepiceContext} from "../../Context/RecipeContext.jsx";


import Spinner from "../Spinner/Spinner";


const CookingRecipe = () => {

  const {recipe,setRecipe} = useContext(RepiceContext)

  useEffect(() => {
    const listRecipe = [];
    
    if(recipe.length === 0){
      const obtenerDatos = async () => {
        const data = await getDocs(collection(db, "cookingRecipe"));
        data.docs.map((i) => {
          listRecipe.push(i.data());
        });
        setRecipe(listRecipe);
      };
      obtenerDatos();
  }
  }, [recipe]);

  
  if(recipe.length > 0){
    return (
      <>
        <h2>Seleccioná los platos que quieres en tu menú.</h2>
        <BtnFoods />
      </>
    );
  }else{
    return(
      <>
        <Spinner/>
      </>
    )
  }
  
  
};

export default CookingRecipe;
