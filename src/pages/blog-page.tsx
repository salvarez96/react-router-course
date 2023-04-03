import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPosts from '../components/blog-page/blog-posts'
import { blogPosts } from '../components/blog-page/blog-posts-logic'

export default function BlogPage() {
  const { slug } = useParams()

  const postInfo = blogPosts.blogPosts.find(post => post.slug === slug)

  return (
    <main>
      <h1>BlogPage</h1>
      <BlogPosts />
      <section>
      {!slug 
      ? <h2>Welcome</h2> 
      : !postInfo ? <h2>Blog post not found</h2>
      : <>
          <h2>{postInfo.title}</h2>
          <p>{postInfo.content}</p>
          <h4>Por: {postInfo.author}</h4>
        </>
      }
      </section>
    </main>
  )
}
