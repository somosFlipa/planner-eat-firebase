import React from 'react';
import './Form.css'
const Form = () =>{
  return (
    <div>
         <form className='FormContainer'>
          <label>Email</label>
          <input type="email"/>
          <label>Password</label>
          <input type="text" />
        </form>
    </div>
  )
}

export default Form