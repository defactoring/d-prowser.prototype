import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 8px 8px 4px;

  :hover {
    background: lightgray;
  }

  ${({ theme: { devices } }) => css`
    @media screen and (min-width: ${devices.mobile}) {
      padding: 24px 16px 8px;
    }
  `}
`

export const Menu = styled.button`
  position: absolute;
  cursor: pointer;
  background: none;
  border: none;
  display: none;
  align-items: center;
  height: 16px;
  appearance: none;
  color: #f7fafd;

  ${({ theme: { devices } }) => css`
    @media screen and (min-width: ${devices.mobile}) {
      display: inline-flex;
      top: 4px;
      right: 0;
    }
  `}
`

export const Link = styled.a`
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 4px;
`

export const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
`

export const Name = styled.p`
  margin: 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
`
