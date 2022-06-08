import { createContext, useEffect, useState } from "react";

export const RepiceContext = createContext({});

export const RepiceContextProvider = ({children}) => {

    const [guardar, setguardar]= useState([])
    const [datos, setDatos] = useState([])
    const [guardarMensaje, setguardarMendaje]= useState([])
    // const [comensales, setComensales] = useState([])

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
                    
                }
            ]);
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

// ---- detalle de comensales-----------------------------------------------------
// const addToComensales =({comensal})=> {
//     setComensales([
//         ...comensales,
//         {
//             comensal
//         }]);
// }

    useEffect(()=> {
        setguardar(guardar)
        setguardarMendaje(guardarMensaje)
        setDatos(datos)
    },[guardar,guardarMensaje,datos])

    // console.log("recetas",guardar)
    // console.log("mensaje",guardarMensaje)
    // console.log("nombre",datos)

    // ----------------- CHECKBOX--------------------------------------------

    const desayuno = []
    const almuerzo = []
    const merienda = []
    const cena = []

    function checkbox(parametro) {
        const chech = document.querySelectorAll(".checkbox")

        for (let i = 0; i < chech.length; i++) {
            const check =  document.querySelectorAll(".checkbox")[i].checked
            
            if(check === true){
                document.querySelectorAll(".checkbox")[i].checked  = false
                // console.log( parametro.toLowerCase())
                if(parametro !== "DESAYUNO"){
                    desayuno.push(i)
                    
                }
                else if(parametro !== "ALMUERZO"){
                    almuerzo.push(i)
                    
                }
                if(parametro !== "MERIENDA"){
                    merienda.push(i)
                    

                }
                if(parametro !== "CENA"){
                    cena.push(i)
                    
                }
                console.log(parametro)
            }

        }
        if (parametro === "DESAYUNO") {
            // console.log(desayuno)
            desayuno.map(e =>{
                document.querySelectorAll('.checkbox')[e].checked = true
            })
        }
        else if (parametro === "ALMUERZO") {
            // console.log(almuerzo)
            almuerzo.map(e =>{
                document.querySelectorAll('.checkbox')[e].checked = true
            })
        }
        else if (parametro === "MERIENDA") {
            console.log(merienda)
            merienda.map(e =>{
                document.querySelectorAll('.checkbox')[e].checked = true
            })
        }
        else if (parametro === "CENA") {
            console.log(cena)
            cena.map(e =>{
                document.querySelectorAll('.checkbox')[e].checked = true
            })
        }
        console.log("array desayuno",desayuno)
        console.log("array almuerzo",almuerzo)
        
    }
    
    

    return (
        <RepiceContext.Provider value={{addTo, borrar, addToInfo,addToMendaje,checkbox, guardar, guardarMensaje, datos}}>
            {children}
        </RepiceContext.Provider>
    )
}







