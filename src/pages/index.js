import React from "react"
import styles from "./index.module.css"
import Logo from "../components/Logo"
import ThemeSwitch from "../components/ThemeSwitch"
import { graphql, withPrefix } from "gatsby"
import PostLink from "../components/PostLink"
import { Helmet } from "react-helmet"
import "./global.css"
import "./article.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className={`${styles.container}`}>
      <Helmet>
        <title>List - Oboo Cheng</title>
        <link rel="icon" href={withPrefix("/favicon.ico")} />
      </Helmet>
      <div className={`${styles.content}`}>
        <section>
          <header className={styles.header}>
            <Logo />
            <ThemeSwitch />
          </header>
          {Posts}
        </section>
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          wordCount {
            words
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
