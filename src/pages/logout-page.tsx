import React from 'react'
import type { FormEventHandler } from 'react'

export default function LogoutPage() {

  const logout: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log('Logout')
  }

  return (
    <main>
      <h1>LogoutPage</h1>
      <form onSubmit={logout}>
        <label htmlFor="logout-button">Seguro que quieres salir?</label>
        <br />
        <button id='logout-button'>Logout</button>
      </form>
    </main>
  )
}
