import React from 'react';
import logo from './logo.svg';
import * as S from './style';

export const App = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/component/App/index.tsx</code> and save to reload.
        </p>
        <S.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.Container>
  );
}
