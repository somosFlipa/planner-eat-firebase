import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/dbConfig";




const CookingRecipe = () => {
  const [user, setUser] = useState({})

 useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "cookingRecipe"));
      setUser(data.docs[0].data())
    };
  obtenerDatos();
  }, []);
return(
<>
<h1>{user.name}</h1>
<h2>{user.category}</h2>
<h2>{user.stepOne}</h2>
<h2>{user.stepTwo}</h2>
<h2>{user.stepThree}</h2>
<h2>{user.stepFour}</h2>
</>
)
};

export default CookingRecipe
