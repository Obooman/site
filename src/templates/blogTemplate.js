import React from "react"
import { graphql } from "gatsby"
import styles from "../pages/index.module.css"
import Logo from "../components/Logo"
import ThemeSwitch from "../components/ThemeSwitch"
import "../pages/global.css"
import "../pages/article.css"
import Footer from "../components/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter)
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <section>
          <header className={styles.header}>
            <Logo />
            <ThemeSwitch />
          </header>
          <article>
            <h1>{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
