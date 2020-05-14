import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby';

const CodeSpan = styled.span`
    color: #303841;
    transition: color 0.3s ease-out;
`;
const CardDiv = styled.div`
    background: #303841;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    border-radius: 25px;
    &:hover {
        background:#0f1112;
        box-shadow: 3px 3px 4px rgba(0,0,0,0.8);
        ${CodeSpan} {
            color: #ff7f50;
        }
    }
`

const ProjImg = styled.img`
    height: calc(100% - 6.8rem);
    width:100%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
`;

const ProjectCard = ({link,source,children}) => {
    return(
    <CardDiv>
        <a href={link} target="_blank">
        <ProjImg src={source} />
        <p>
            <CodeSpan>&lt;</CodeSpan>
            {children}
            <CodeSpan>&#47;&gt;</CodeSpan>
        </p>
        </a>
    </CardDiv>
    )
}


export default ProjectCard
