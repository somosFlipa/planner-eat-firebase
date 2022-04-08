import React from 'react'

function ViewFood({recipe, btn1}) {

    console.log(btn1)
    // function btn1(food) {
    //     recipe.map(i =>{
    //         i.Comida.filter(z => {
    //             if ((z === food) === true) {
    //                 return( <p>{food} {i.Nombre}</p>)
                    
    //             }
    //         })
    //     })
    // }
    return (
        <>
            {
                    recipe.length === 0 ? <h2>No se encontro </h2> : 
                    function btn1(food) {
                        recipe.map(i =>{
                            i.Comida.filter(z => {
                                if ((z === food) === true) {
                                    return( <p>{food} {i.Nombre}</p>)
                                    
                                }
                            })
                        })
                    }
                }
        </>
    )
}

export default ViewFood;