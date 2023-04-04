import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { blogPostsList } from '../components/blog-page/blog-posts-logic'

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <ul>
        {blogPostsList.map(({ key, title, slug }) => (
          <li key={key}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  )
}
