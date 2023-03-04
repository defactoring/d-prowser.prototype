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
  gap: 0;

  @media screen and (min-width: 600px) {
    max-width: 800px;
    margin: 40px auto 0;
    gap: 8px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 40px auto 0;
    gap: 48px;
  }
`

export const EditContents = styled.div`
  position: fixed;
  bottom: 40px;
  display: flex;
  gap: 25px;
`
