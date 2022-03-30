import React from 'react';
import './Form.css'
const Form = () =>{
  return (
    <div>
         <form className='FormContainer'>
          <label>Nombre</label>
          <input type="text" />
         <label >Apellido</label>
          <input type="text" />
          <label>Mail</label>
          <input type="email" name="" id="" />
        </form>
    </div>
  )
}

export default Form