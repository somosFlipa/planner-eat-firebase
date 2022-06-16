import React, {useState, useContext} from 'react';

import './Form.css';

// import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";


import {RepiceContext} from "../../Context/RecipeContext.jsx";


const Form = () =>{

  const {addToInfo}= useContext(RepiceContext)
  const history = useNavigate()

  // const [state, setState] = useState({});
  const [nombre, setNombre] = useState({});
  const [email, setEmail] = useState({});


    function handleChange(e){
      setNombre({
            ...nombre,
            [e.target.name] : e.target.value
        })
        setEmail({
          ...email,
          [e.target.name] : e.target.value
      })
        
    }

    

    const login = (nombre,email) => {
    
    if ( Object.entries(email).length !== 0 && Object.entries(email).length !== 0) {
      addToInfo(nombre,email);
      history('/Welcome')
      // console.log('valido')
    }else console.log("coloca")
    
    }


    // function guardar(e) {
    //   e.preventDefault();
    //   addToInfo(state);
    //   // history('/Welcome')
    // }

  
  return (
    <div>
        <form className='FormContainer' onSubmit={e =>{
          e.preventDefault();
          login(nombre, email)
          
        }} >
          
          <input type="text" name="user_name" onChange={(e) => handleChange(e)} placeholder='Nombre Y Apellido*' />
          
          <input type="email" name="user_email" onChange={(e) => handleChange(e)} placeholder='Email*' />

          <div className='btn-comenzar'>

            {/* <Link className="btn-next-comenzar" to={'/Welcome'} onClick={guardar}>Comenzar</Link> */}

            <button className="btn-next-comenzar" >Comenzar</button>

          </div>

        </form>
    </div>
  )
}

export default Form