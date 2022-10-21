import React from 'react';
import logo from './logo.svg';
import * as S from './style';
import { AppIcon } from '../AppIcon';

export const App = () => {
  //配列の作成
   const appIconList = [
    {title:'youtube',icon:'',url:'https://www.youtube.com/'},
    {title:'facebook',icon:'',url:''},
    {title:'amazon',icon:'',url:''},
    {title:'twitter',icon:'',url:''},
    {title:'memo',icon:'',url:''},
    {title:'zoom',icon:'',url:''},
    {title:'instagram',icon:'',url:''},
    {title:'Maps',icon:'',url:''},
    {title:'iTunes',icon:'',url:''}
  ];
  return (
    <S.Container>
      {appIconList.map((appIconItem) => {
        return (
          //todo propsでユーザーが設定したアプリタイトル・アイコン画像・アプリURLを渡す。
          <AppIcon 
           title={appIconItem.title}
           icon={appIconItem.icon}
           url={appIconItem.url}
           />
        )})}
    </S.Container>
  );
}
