import React from 'react';
import logo from './logo.svg';
import * as S from './style';
import { AppIcon } from '../AppIcon';

export const App = () => {
  //配列の作成
   const appIconList = [
    {title:'youtube',icon:'',url:''},
    {title:'facebook',icon:'',url:''},
    {title:'amazon',icon:'',url:''}
  ];
  return (
    <S.Container>
      {appIconList.map((appIconItem) => {
        return (
<<<<<<< HEAD
=======
          //propsを渡す
>>>>>>> develop
          <AppIcon 
           title={appIconItem.title}
           icon={appIconItem.icon}
           url={appIconItem.url}
           />
        )})}
    </S.Container>
  );
}
