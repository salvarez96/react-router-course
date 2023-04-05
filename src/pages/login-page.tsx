import React from 'react'
import type { FormEventHandler } from 'react'
import { useState } from 'react'

export default function LoginPage() {

  const [username, setUsername] = useState('')

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(username)
  }

  return (
    <main>
      <h1>LoginPage</h1>
      <form onSubmit={login}>
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
