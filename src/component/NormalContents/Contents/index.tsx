import React from 'react';
import * as S from './style';
import {AppIcon} from '../AppIcon';
import {AddIcon} from '../AddIcon';
import {EditIcon} from '../EditIcon';
import {get} from '../../../feature/bookmark';

type Props = {
  open: () => void
}

export const Contents: React.FC<Props> = ({open}) => {
  return (
    <S.Container>
      <AddIcon open={open}/>
      <EditIcon/>
      {get().map((appIconItem) => {
        return (
          <AppIcon
            key={appIconItem.id}
            title={appIconItem.title}
            icon={appIconItem.icon}
            url={appIconItem.url}
          />
        )
      })}
    </S.Container>
  );
}
