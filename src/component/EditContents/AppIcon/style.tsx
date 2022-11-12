import styled from '@emotion/styled'
import {TextField} from '@mui/material';
import {Clear} from '@mui/icons-material';

export const IconImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
`;

export const Overlay = styled(Clear)`
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 72px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  position: relative;
  width: 72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: black;
  gap: 3px;
`;

export const Title = styled(TextField)``;
