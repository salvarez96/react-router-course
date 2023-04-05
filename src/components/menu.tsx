import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/blog',
    text: 'Blog'
  },
  {
    to: '/profile',
    text: 'Profile'
  },
  {
    to: '/login',
    text: 'Login'
  },
  {
    to: '/logout',
    text: 'Logout'
  }
]

export default function Menu() {
  return (
    <nav>
      <ul>
        {navLinks.map(({ to, text }, i) => (
          <li key={i}>
            <NavLink 
              style={({ isActive }) => (
                { 
                  color: isActive ? 'red' : 'black'
                }
              )} 
              to={to}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
