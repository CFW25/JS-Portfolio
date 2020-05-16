import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = ({ img, className, children, home }) => {
    const data = useStaticQuery(getImage)

    return(
        <BackgroundImage
        className={className}
        fluid={img || data.defaultBcg.childImageSharp.fluid}
        home={home}
        id="about"
        >
            {children}
        </BackgroundImage>
    )
}

export default styled(Hero)`
    min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};}
    background: ${props =>
        props.home
            ? "linear-gradient(rgba(0,0,0,0), rgba(69,86,125,91))"
            : "none"};
    width: 100%;
    background-position: center;
    background-size: cover;
    opacity:1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`