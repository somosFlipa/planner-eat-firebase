import React, {useState, useContext} from 'react';
import './Form.css';
import { Link } from "react-router-dom";
import {RepiceContext} from "../../Context/RecipeContext.jsx";

const Form = () =>{

  const {addToInfo}= useContext(RepiceContext)

  const [state, setState] = useState({});

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        
    }

    function guardar() {
      addToInfo(state);
    }

  
  return (
    <div>
        <form className='FormContainer'>
          
          <input type="text" name="user_name" onChange={(e) => handleChange(e)} placeholder='Nombre Y Apellido*'/>
          
          <input type="email" name="user_email" onChange={(e) => handleChange(e)} placeholder='Email*'/>
          <Link className="btn-next" to={'/Welcome'} onClick={guardar}>Comenzar</Link>
        </form>
    </div>
  )
}

export default Form