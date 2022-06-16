import React, {useState, useContext} from 'react';

import './Form.css';

import { Link } from "react-router-dom";
//import {useNavigate } from "react-router-dom";


import {RepiceContext} from "../../Context/RecipeContext.jsx";
import e from 'cors';

const Form = () =>{

  const {addToInfo}= useContext(RepiceContext)
  //const history = useNavigate()

  const [state, setState] = useState({});

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        
    }

    function guardar() {
      
      addToInfo(state);
      //history('/Welcome')
    }

  
  return (
    <div>
        <form className='FormContainer' >
          
          <input type="text" name="user_name" onChange={(e) => handleChange(e)} placeholder='Nombre Y Apellido*' required/>
          
          <input type="email" name="user_email" onChange={(e) => handleChange(e)} placeholder='Email*' required/>

          <div className='btn-comenzar'>

            <Link className="btn-next-comenzar" to={'/Welcome'} onClick={guardar}>Comenzar</Link>

            {/*<button className="btn-next-comenzar" onClick={guardar}><Link to={'/Welcome'} ></Link> Comenzar</button>*/}

          </div>

        </form>
    </div>
  )
}

export default Form