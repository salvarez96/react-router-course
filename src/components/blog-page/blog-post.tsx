import React from 'react'
import { useParams } from 'react-router-dom'
import { blogPostsList } from './blog-posts-logic'

export default function BlogPost() {
  const { slug } = useParams()

  const postInfo = blogPostsList.find(post => post.slug === slug)

  return (
    <section>
      {!postInfo 
      ? <h2>Blog post not found</h2>
      : <>
          <h2>{postInfo.title}</h2>
          <p>{postInfo.content}</p>
          <h4>Por: {postInfo.author}</h4>
        </>
      }
    </section>
  )
}
