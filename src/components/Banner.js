import React from 'react'
import styled from 'styled-components'

const BannerDiv = styled.div`
  p {
    font-size: 2.8rem;
    font-weight: 600;
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
    font-size: 10.5rem;
  }
    p {
    
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