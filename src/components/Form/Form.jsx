import React from 'react';
import './Form.css';

const Form = () =>{
  
  return (
    <div>
         <form className='FormContainer'>
          <label>Email</label>
          <input type="email" placeholder='Email'/>
          <label>Password</label>
          <input type="password" placeholder='Password'/>
        </form>
    </div>
  )
}

export default Form