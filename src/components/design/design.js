import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './design.css'
import styled from 'styled-components'

const StyledHeader = styled.h2`
    max-width: 760px;
    margin: 0 auto 3rem auto;
    border-bottom: 0.5rem solid #f0f0f0;
    @media only screen and (min-width: 760px){
    font-size: 4rem;}
    `

const DesignCont = styled.div`
    padding-top: 3rem;
    background-color:#45567d;
`

const Imgwrapper = styled.div`
    column-count: 2;
    padding:0;
    column-gap: 0;
    display:none;
    @media only screen and (min-width: 760px){
        column-count: 3;
    }
    @media only screen and (min-width: 1440px){
        column-count: 4;
    }
`

const DesignImages = styled(Img)`
    
`
const DesignBtn = styled.button`
    display:block;
    box-shadow:inset 0px 1px 3px 0px #91b8b3;
    background:#45567d;
	border-radius:5px;
	border:1px solid #566963;
	cursor:pointer;
	color:#ffffff;
	font-size:3.5rem;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
    text-shadow:0px -1px 0px #2b665e;
    margin: 0 auto;
    &:hover {
        background:linear-gradient(to bottom, #303841 5%, #45567d 100%);
    }
`
function ToggleDesigns() {
    var x = document.getElementById("imgDiv");
        if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("btnID").innerHTML = "Hide Designs";
    } else {
    x.style.display = "none";
    document.getElementById("btnID").innerHTML = "Show Designs";
    }
}

const Design = () => (
    <StaticQuery
        query={graphql`
                    query {
                        allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{eq:"designimages"}}) {
                        edges {
                        node {
                            childImageSharp {
                            fluid(quality: 90, maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }`
    }
    render={data => (
        <DesignCont id="designs">
            <StyledHeader>Designs</StyledHeader>
            <DesignBtn id="btnID" onClick={ToggleDesigns}>Show Designs</DesignBtn>
            <Imgwrapper id="imgDiv">
                {data.allFile.edges.map(({node},i) => (
                        <DesignImages 
                            key={i} 
                            fluid={node.childImageSharp.fluid}
                            className="image"
                        />
                ))}
            </Imgwrapper>
        </DesignCont>
    )}
    />
)

export default Design

