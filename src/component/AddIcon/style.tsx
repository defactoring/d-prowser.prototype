import styled from '@emotion/styled';

export const Container = styled.div`
  cursor: pointer;
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 5px;
`;

export const Icon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  text-align: center;
`;
