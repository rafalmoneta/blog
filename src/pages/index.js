import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Post = styled(Link)`
  display: block;
  margin: 0 1rem 2rem;
  position: relative;
  box-shadow: rgba(146, 142, 125, 0.2) 0px 10px 20px;
  will-change: transform;
  color: #000000;
  padding: 2.5rem;
  background: rgb(253, 253, 253);
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(246, 246, 249);
  border-image: initial;
  transition: box-shadow 0.2s ease 0s;
  text-decoration: none;
  &:hover {
    box-shadow: rgba(103, 110, 144, 0.05) 0px 4px 4px, rgba(103, 110, 144, 0.05) 0px 2px 2px;
    box-shadow: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }

`

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Post
            to={`${node.fields.slug}`}
          >
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: '0px',
                    marginTop: '0px',
                    textDecoration: 'none',
                    color: '#000'
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>
                  <span>{node.frontmatter.date}</span>
                  { !node.frontmatter.time || 
                      <span aria-label="drink" role="img">&nbsp; • &nbsp;🥤 {node.frontmatter.time} min read</span>
                  }
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          </Post>

        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            time
          }
        }
      }
    }
  }
`
