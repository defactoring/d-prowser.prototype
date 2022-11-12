import React from 'react'
import styled from '@emotion/styled'

const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
`;

const Link = styled.a`
  padding-bottom: 9px;
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 4px;
`;

const Title = styled.p`
  margin: 0;
  text-align: center;
`;

export const AppIcon: React.FC<{ title: string; icon: string; url: string }> = (props) => {
  return <Link href={props.url} target='_blank'>
    <IconImage src={props.icon}/>
    <Title>{props.title}</Title>
  </Link>
}
