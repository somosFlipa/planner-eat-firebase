import React from 'react'

function ViewFood({recipe, btn1}) {

    // const TraerProductos = () => {
    //     db.collection("Productos")
    //       .where("categoria", "==", instrument)
    //       .get()
    //       .then((docs) => {;
    //         docs.forEach((doc) => {
    //           if (doc.data().Quantity > 0) {
    //             productList.push({
    //               productos: doc.data(),
    //               id: doc.id,
    //             })}
    //           setExist(doc.exists)
    //         });
    //         setItems(productList);
    //       });
    //   };

    return (
        <>
            
            {
                    recipe.length === 0 ? <h2>No se encontro </h2> : 
                    // function btn1(food) {
                    //     recipe.map(i =>{
                    //         i.Comida.filter(z => {
                    //             if ((z === food) === true) {
                    //                 <p>{food} {i.Nombre}</p>
                                    
                    //             }
                    //         })
                    //     })
                    // }
                    <p>{btn1}</p>
                    
                }
        </>
    )
}

export default ViewFood;