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

const favicon = (url: string) => {
  const {hostname} = new URL(url)
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${hostname}&size=128`
}

export const AppIcon: React.FC<{ title: string; icon: string; url: string }> = (props) => {
  return <Link href={props.url} target='_blank'>
    <IconImage src={`${favicon(props.url)}`}/>
    <Title>{props.title}</Title>
  </Link>
}
