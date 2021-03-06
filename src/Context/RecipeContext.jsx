import e from "cors";
import { createContext, useEffect, useState } from "react";

export const RepiceContext = createContext({});

export const RepiceContextProvider = ({children}) => {

    const [recipe, setRecipe] = useState([]);

    const [guardar, setguardar]= useState([])
    const [datos, setDatos] = useState([])
    const [guardarMensaje, setguardarMendaje]= useState([])


    const [comensales, setComensales] = useState([])
    const [cantidad, setCantidad] = useState([])

// ----Borra los datos del chebox---------------------------------------
    const borrar =(id)=> {
        const borra = guardar.findIndex(item => item.id === id);
        if (guardar[borra].id === 1) {
            setguardar(guardar.filter(i => i.id !== id))
        } else {
            setguardar(guardar.map(p => p.id === id ? {...p, id: p.id - 1} : p));
        }
        
    }

// ----Agrega los datos del chebox---------------------------------------
    const addTo =(recipe)=> {
        let found = guardar.find((recipe) => recipe.idMenu === recipe.id);
        if (found === undefined) {
            setguardar([
                ...guardar,
                {
                    id: recipe,
                    cantidad:cantidad
                }
                
            ]);
            setCantidad(
                cantidad
                
            )
        }
    }

// ----Agrega los datos de los input ---------------------------------------
    const addToInfo =({user_name,user_email})=> {
            setDatos([
                ...datos,
                {
                    user_name,
                    user_email,
                }]);
    }

// ----Agrega los datos de los textarea ---------------------------------------
    const addToMendaje =({mensaje})=> {
        setguardarMendaje([
            ...guardarMensaje,
            {
                mensaje
            }]);
    }

// ---- Agregar comensales-----------------------------------------------------
    const addToComensales =(comensal)=> {
        setComensales(
            
            comensal
            );
    }

// ---- Agregar cantidad de resetas-----------------------------------------------------
    const addToCantidad =(cantidad)=> {
        setCantidad(
            cantidad
            
        );
    }




    useEffect(()=> {
        setguardar(guardar)
        setguardarMendaje(guardarMensaje)
        setDatos(datos)
        setComensales(comensales)
        setRecipe(recipe)
        setCantidad(cantidad)
    },[guardar,guardarMensaje,datos,recipe,comensales,cantidad])

    function checkbox(parametro) {
        const chech = document.querySelectorAll(".checkbox")
        for (let i = 0; i < chech.length; i++) {
            const check =  document.querySelectorAll(".checkbox")[i].checked
            
            if(check === true){
                document.querySelectorAll(".checkbox")[i].checked  = false
                
            }

        }    
    }

    function reiniciar() {
        const amount = document.querySelectorAll("#contador")
        for (let i = 0; i < amount.length; i++) {
            const restart =  document.querySelectorAll(".checkbox")[i].innerHTML
            
            if(restart !== "1"){
                document.querySelectorAll("#contador")[i].innerHTML  = "1"
                
            }

        } 
    }


    return (
        <RepiceContext.Provider value={{addTo, borrar, addToInfo,addToMendaje,checkbox,
                                        guardar, guardarMensaje, datos,setRecipe , recipe,
                                        addToComensales, comensales,addToCantidad,reiniciar }}>
            {children}
        </RepiceContext.Provider>
    )
}

