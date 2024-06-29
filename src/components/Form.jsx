import React from 'react'
import { useState } from 'react'

const Form = ({title, handleClick}) => { // не забывать передавать пропсы в фигурных скобках
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <button
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
      
    </div>
  )
}

export default Form
