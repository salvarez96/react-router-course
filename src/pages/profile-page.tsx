import React from 'react'
import { useAuth } from '../auth/auth'

export default function ProfilePage() {
  
  const { user } = useAuth()

  return (
    <main>
      <h1>ProfilePage</h1>
      {user && user.username 
      ? <p>Welcome { user?.username }</p>
      : <p>Well this shouldn't be here lel. PS: you're logged out :P</p>
      }
    </main>
  )
}
