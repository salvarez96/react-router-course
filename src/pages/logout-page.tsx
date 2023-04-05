import React from 'react'
import type { FormEventHandler } from 'react'
import { useAuth } from '../auth/auth'

export default function LogoutPage() {

  const { user, logout } = useAuth()

  const logoutForm: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    logout()
  }

  return (
    <main>
      <h1>LogoutPage</h1>
      <form onSubmit={logoutForm}>
        <label htmlFor="logout-button">Seguro que quieres salir {user?.username}?</label>
        <br />
        <button id='logout-button'>Logout</button>
      </form>
    </main>
  )
}
