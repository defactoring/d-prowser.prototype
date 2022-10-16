import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width:  73px;
    height: 73px;
    background-color: red;
`;

export const AppIcon: React.FC = () => {
    return <div className="appicon">
        <Container />
        <img src={this.props.icon} />
        <a src={this.props.url} />
        <p>{this.props.title}</p>
    </div>
        
}