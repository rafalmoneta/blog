import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

class Layout extends React.Component {
  
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header
    const title = <Title>RAFALMONETA<span>BLOG</span></Title>



    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            fontSize: '3.5rem'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
        <GlobalStyle/>
        <Wrapper>
          <div> 
              <header>{header}</header>
              <main>{children}</main> 
          </div>
          <Footer>
            © {new Date().getFullYear()} Site built with <span role="img" aria-label="heart" >❤️</span> JavaScript and CSS using React and Gatsby.
          </Footer>
        </Wrapper>
      </React.Fragment>
      
    )
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open Sans,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin: 0;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-size: 1.2em;
    line-height: 1.5;
    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
    }
  }

  html {
    background-color: #fff;
    ${'' /* font-size: 16px; */}
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }
  * {
    box-sizing: inherit;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 42rem;
`

const Title = styled.div`
  ${'' /* font-size: 4rem; */}
  ${'' /* text-align: center; */}
  span {
    color: #E90A1F;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout