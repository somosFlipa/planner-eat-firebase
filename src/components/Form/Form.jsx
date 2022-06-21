import React, {useState, useContext} from 'react';

import './Form.css';

import {useNavigate } from "react-router-dom";


import {RepiceContext} from "../../Context/RecipeContext.jsx";


const Form = () =>{

  const {addToInfo}= useContext(RepiceContext)
  const history = useNavigate()

  const [state, setState] = useState({
    user_name: "",
    user_email:""
  });



    function handleChange(e){

      setState({
        ...state,
        [e.target.name] : e.target.value

      })
        
    }


    const login = (state) => {
  
      if ( Object.entries(state.user_name).length > 0 &&  Object.entries(state.user_email).length > 0 ) {
        addToInfo(state);
        history('/Welcome')
      
      }else console.log("verifique bien su nombre y email")

  }


  return (
    <div>
        <form className='FormContainer' onSubmit={e =>{
          e.preventDefault();
          login(state)
        
          
        }} >
          
          <input type="text" name="user_name" className='usuario' onChange={(e) => handleChange(e)} placeholder='Nombre Y Apellido*' />
          
          <input type="email" name="user_email" className='usuario2' onChange={(e) => handleChange(e)} placeholder='Email*' />

          <div className='btn-comenzar'>

            {/* <Link className="btn-next-comenzar" to={'/Welcome'} onClick={guardar}>Comenzar</Link> */}

            <button className="btn-next-comenzar" >Comenzar</button>

          </div>

        </form>
    </div>
  )
}

export default Form