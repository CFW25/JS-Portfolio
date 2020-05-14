import React from 'react'
import styled from 'styled-components'

const BannerDiv = styled.div`
  p {
    font-size: 3rem;
    font-weight: 200;
    font-style: italic;
    color: #be3144;
    text-align:center;
}
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

@media screen and (min-width: 768px) {
    h1 {
    font-size: 6.5rem;
  }
    p {
    width: 70%;
  }
}
`

const Banner = ({title, name, info,children}) => {
    return (
        <BannerDiv>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <p>{info}</p>
            {children}
        </BannerDiv>
    )
}

export default Banner