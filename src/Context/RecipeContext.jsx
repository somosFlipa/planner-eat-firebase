import { createContext, useState } from "react";

export const RepiceContext = createContext({});

export const RepiceContextProvider = ({children}) => {

    const [guardar, setguardar]= useState([])

    const addTo =(ingredients)=> {
        let found = guardar.find(ingredients => ingredients.idMenu === ingredients.id);
        if (found === undefined) {
            setguardar([
                ...guardar,
                {
                    id: ingredients,
                    
                    
                }]);
        } 
    }
    const borrar =(ingredients)=> {
        let found = guardar.remove(ingredients => ingredients.idMenu === ingredients.id);
        if (found === true) {
            setguardar([
                ...guardar,
                {
                    id: ingredients,

                }]);
        } 
    }
    console.log(guardar)
    

    return (
        <RepiceContext.Provider value={{addTo}}>
            {children}
        </RepiceContext.Provider>
    )
}







