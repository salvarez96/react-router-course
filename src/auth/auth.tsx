import React, { useContext, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

interface Auth {
  user: { username: string } | null
  login: (username: string) => void
  logout: () => void
}

const AuthContext = React.createContext({})

function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate()
  const [user, setUser] = useState<Auth['user']>(null)

  function login(username: string) {
    if (username) 
      setUser({ username })
      navigate('/profile')
  }
  
  function logout() {
    setUser(null)
    navigate('/')
  }

  const auth: Auth = { user, login, logout }

  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const authContext = useContext(AuthContext) as Auth
  return authContext
}

export { AuthProvider, useAuth }