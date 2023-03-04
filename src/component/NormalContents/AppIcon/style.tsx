import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 12px 8px 4px;

  :hover {
    background: lightgray;
  }

  @media screen and (min-width: 600px) {
    padding: 20px 16px 12px;
  }
`

export const Menu = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  height: 16px;
  appearance: none;
  color: #f7fafd;
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
