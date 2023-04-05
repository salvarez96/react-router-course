import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/auth'
import { navLinks } from './nav-links'

export default function Menu() {

  const { user } = useAuth()

  return (
    <nav>
      <ul>
        {navLinks.map(({ to, text, privateRoute }) => {
          if (privateRoute && !user || to === '/login' && user) return null
          return (
            <li key={to}>
              <NavLink 
                style={({ isActive }) => (
                  { color: isActive ? 'red' : 'black' }
                )} 
                to={to}>
                {text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
