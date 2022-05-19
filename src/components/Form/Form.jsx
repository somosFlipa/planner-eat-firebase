import React from 'react';
import './Form.css';

const Form = () =>{
  
  return (
    <div>
         <form className='FormContainer'>
          
          <input type="text" placeholder='Nombre Y Apellido*'/>
          
          <input type="email" placeholder='Email*'/>
        </form>
    </div>
  )
}

export default Form