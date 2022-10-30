import React from "react"
import styled from "styled-components"

const IconImage = styled.img`
    width:  73px;
    height: 73px;
    border-radius: 5px;
`;
const LINK = styled.a`
    text-decoration: none;
    color: black;
`;
const Title = styled.p`
    margin-top: 0;
    text-align: center;
`;

//propsを受け取る。
export const AppIcon: React.FC<{ title: string; icon: string; url:string }>  = (props) => {
    return <LINK href={props.url} target="_blank">
        <IconImage src={props.icon} />
        <Title>{props.title}</Title>
        </LINK>
}