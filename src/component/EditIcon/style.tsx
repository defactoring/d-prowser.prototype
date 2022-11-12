import styled from '@emotion/styled';
import {Edit} from '@mui/icons-material';

export const Container = styled.div`
  cursor: pointer;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  border-radius: 50%;
`;

export const Icon = styled(Edit)`
  width: 48px;
  height: 48px;
`;
