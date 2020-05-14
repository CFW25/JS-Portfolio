import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

const FootDiv = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    background-color: #be3144;
    padding:1rem;
    p {
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        padding-bottom: 0.5rem;
        font-style: italic;
    }
`
const Footer = () => (
    <FootDiv>
        <p>Copyright &#64; Craig Whittington 2020 All Rights Reserved</p>
    </FootDiv>
)

export default Footer