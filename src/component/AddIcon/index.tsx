import React from 'react';
import * as S from './style';
import {useDialog} from '../hooks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddIcon: React.FC = () => {
  const {open} = useDialog()
  const iconStyle: React.CSSProperties = {
    fontSize: 50,
    //todo styled-conpornentsを使ってfontawesomeを表示させたい
    //todo 十時マークを真ん中に配置したい
    //todo 十時の色を薄いグレーにしたい
  };
  return <S.Container role='button' aria-pressed={false} onClick={open}>
        <S.Icon>
          <FontAwesomeIcon style={iconStyle} icon={faPlus} />
        </S.Icon>
      <S.Title>add</S.Title>{/* todo マウスカーソルをボタンの上に照らしたときに「編集」と表示させたい */}
    </S.Container>
}
