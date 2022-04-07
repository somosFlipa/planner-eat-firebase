import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";

function Foods(prop) {
    const [food, setFood] = useState([])
    const listFood = []

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await getDocs(collection(db, "cookingRecipe"));
            data.docs.map(i => { listFood.push(i.data().Comida)})
            setFood(listFood)
        };
        obtenerDatos();
    },[]);
    
    // console.log(prop.recipe)
    // const filtered = prop.recipe.filter(function(element){
    //     console.log(element.Comida === 'CENA') 
    // });
    


    return (
        <>
            {
                
            // condición ? expr1 : expr2 
                food.map((f) =>{
                    return(

                        <p>CENA: {f.indexOf('CENA')}</p>
                    )
                    
                })
                // ? 
                // <p>cena: {food}{console.log(food[0])}</p> :
                // <p>No exite</p>
            }
            
        </>
    )
}

export default Foods