import styled from '@emotion/styled';
import {Refresh} from '@mui/icons-material';

export const Container = styled.div`
  cursor: pointer;
  width: 72px;
  height: 72px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  border-radius: 50%;
`;

export const Icon = styled(Refresh)`
  width: 72px;
  height: 72px;
`;
