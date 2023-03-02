import styled from '@emotion/styled'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px;
  margin-top: 25px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  @media screen and (min-width:600px) {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    gap: 40px;
  }
  @media screen and (min-width:1280px) {
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 40px;
    gap: 80px;
  }
`

export const EditContents = styled.div`
  position: fixed;
  bottom: 40px;
  display: flex;
  gap: 25px;
`