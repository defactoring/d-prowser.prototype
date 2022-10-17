import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width:  73px;
    height: 73px;
    background-color: red;
`;

//propsを受け取る。
export const AppIcon: React.FC<{ title: string; icon: string; url:string }>  = (props) => {
    return <div className="appicon">
        <Container />
        <img src={props.icon} />
        <a href={props.url} />
        <p>{props.title}</p>
    </div>
        
}