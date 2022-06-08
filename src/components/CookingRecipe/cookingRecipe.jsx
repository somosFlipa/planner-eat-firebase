import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";
import BtnFoods from "../BtnFoods/BtnFoods";

import Spinner from "../Spinner/Spinner";


const CookingRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  

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
  }else{
    console.log("datos extraidos")
  }
  }, [recipe]);

  // console.log(recipe)

  if(recipe.length > 0){
    return (
      <>
        <h2>Seleccioná los platos que quieres en tu menú.</h2>
        <BtnFoods recipe={recipe}/>
      </>
    );
  }else{
    return(
      <>
        {/*<p>Cargando...</p>*/}
        {/* <BtnFoods recipe={0}/> */}
        <Spinner/>
      </>
    )
  }
  
  
};

export default CookingRecipe;