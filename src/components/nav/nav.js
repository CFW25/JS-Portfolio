import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

const NavDiv = styled.div`
    overflow: hidden;
    background-color: #be3144;
    display: flex;
    justify-content: flex-end;
`;

const NavList = styled.ul`
    display: flex;
    transform: skewX(-15.5deg);
    padding:0; 
    margin:0;
    margin-right: 2rem;
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 2.2rem;
    padding: 1rem;
    color: white;
    &:hover {
        background-color: #45567d;
    }
    @media only screen and (min-width: 760px){
        font-size: 3rem;
        padding: 2rem;
    }
    @media only screen and (min-width: 1440px){
        font-size: 4rem;
    }
`;

const StyledLi = styled.li`
    float:right
`

const Nav = () => (
    <NavDiv>
        <NavList>
            <StyledLi><StyledLink to="/#about">About</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/#projects">Projects</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/#designs">Designs</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/#contactme">Contact Me</StyledLink></StyledLi>
        </NavList>
    </NavDiv>
);

export default Nav