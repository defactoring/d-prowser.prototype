import React from 'react'
import styled from 'styled-components'

const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
`;

const Link = styled.a`
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 5px;
`;

const Title = styled.p`
  margin: 0;
  text-align: center;
`;

export const AppIcon: React.FC<{ title: string; icon: string; url: string }> = (props) => {
  const favicon = props.url && new URL(props.url).origin
  return <Link href={props.url} target='_blank'>
    <IconImage src={`${favicon}/favicon.ico`}/>
    <Title>{props.title}</Title>
  </Link>
}
