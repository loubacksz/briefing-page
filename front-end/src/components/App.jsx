import { useState } from 'react'
import '../assets/css/App.css'

function App() {

  return (
    <div id='loginDiv'>
      <div className='logo-container'><img src="\src\assets\ci-logo.png" alt="C-Innovation logo" /></div>
      
      <h3 className='instruction-text'>Por favor, insira seu nome e CPF</h3>

      <form action="POST" className='login-form'>
        <input className='input-field' type="text" id='nome' name='nome' placeholder='Digite seu nome'/>
        
        <input className='input-field' type="text" id='cpf' name='cpf' placeholder='Digite seu CPF'/>
        
        <button className='submit-btn' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App;
