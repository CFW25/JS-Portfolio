import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import {FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const ContactCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-image: linear-gradient(rgba(69,86,125,91), rgba(0,0,0,100));
    i {
        margin: 0.5rem;
        padding: 2.5rem;
    }
    h2 {
    }
`;

const ContactHeader = styled.div`
    margin-bottom:1rem;
`;

const StyA = styled.a`
    padding:1rem;
    &:hover{
            color: #000000;
    }
`;

const Contact = () => (
    <ContactCont id="contactme">
        <ContactHeader>
            <h2>Let's work together...</h2>
        </ContactHeader>
        <div>
            <StyA href="https://github.com/cfw25" target="_blank">
            Github</StyA>
            <StyA href="mailto:craig.whitt@hotmail.co.uk">
            Email Me</StyA>
        </div>
    </ContactCont>
)

export default Contact