import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from './blog-posts-logic'

export default function BlogPosts() {
  return (
    <>
      <ul>
        {blogPosts.blogPosts.map(post => (
          <li key={post.key}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
