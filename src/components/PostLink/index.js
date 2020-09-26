import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const PostLink = ({ post }) => {
  return (
    <div className={styles.link}>
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      <p className={styles.subtitle}>Published in {post.frontmatter.date} </p>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default PostLink
