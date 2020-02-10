/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, learning} = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: '1rem',
                marginBottom: 0,
                minWidth: 70,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p 

            >
              Created by <strong>{author}</strong> - nerdy guy, science fiction fan. Wants to solve real problems using code and build useful applications. This blog is my programming diary. <span role="img" aria-label="astro"> 👨‍🚀</span> <br/>Currently learning: <LearningBox>{learning}</LearningBox> <span role="img" aria-label="bot">🤖</span>
              
              {` `}
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "images/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        learning
        author
        social {
          github,
          email
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 1rem;
  flex-direction: row;
  a {
    box-shadow: none;
    &:hover {
      box-shadow: 0 1px 0 0 currentColor;
    }
  }
  p {
    text-align: justify;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LearningBox = styled.span`
  color: #E90A1F;
`

export default Bio
