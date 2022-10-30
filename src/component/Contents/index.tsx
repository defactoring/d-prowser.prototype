import React from 'react';
import * as S from './style';
import { AppIcon } from '../AppIcon';

export const Contents = () => {
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
           key={appIconItem.title}
           title={appIconItem.title}
           icon={appIconItem.icon}
           url={appIconItem.url}
           />
        )})}
    </S.Container>
  );
}
