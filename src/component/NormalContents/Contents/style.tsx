import styled from '@emotion/styled'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
`

export const AppContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0;
  margin-bottom: 120px;

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
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 25px;
`
