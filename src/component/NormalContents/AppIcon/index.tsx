import React from 'react'
import styled from '@emotion/styled'

const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
`

const Link = styled.a`
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 4px;
`

const Name = styled.p`
  margin: 0;
  text-align: center;
`
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<{ name: string; icon: string; url: string }> = (props) => {
  return (
    <Link href={props.url} target='_blank'>
      <IconImage src={props.icon} />
      <Name>{props.name}</Name>
    </Link>
  )
}
