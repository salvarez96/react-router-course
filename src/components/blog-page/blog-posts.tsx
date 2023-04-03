import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from './blog-posts-logic'


export default function BlogPosts() {
  return (
    <>
      <ul>
        {blogPosts.blogPosts.map(({ key, title, slug }) => (
          <li key={key}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
