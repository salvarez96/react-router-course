import React from 'react'
import type { FormEventHandler } from 'react'
import { useState } from 'react'
import { useAuth } from '../auth/auth'

export default function LoginPage() {

  const { user, login, logout } = useAuth()
  const [username, setUsername] = useState('')

  const loginForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (username.trim()) 
      login(username.trim()) 
  }

  return (
    <main>
      <h1>LoginPage</h1>
      <form onSubmit={loginForm}>
        <div>
          <label htmlFor="username">Ingresa tu nombre de usuario:</label>
          <br />
          <input type="text" id='username' onChange={e => setUsername(e.target.value)} />
        </div>
        <button>Login</button>
      </form>
    </main>
  )
}
