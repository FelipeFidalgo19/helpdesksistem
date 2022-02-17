import React from 'react';
import * as S from './styles';

import iconNotification from '../../assets/notification.png';
import iconMore from '../../assets/iconMore.png';

function Header({ countNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
      </S.LeftSide>
      <S.RightSide>
        <img src={iconMore} alt="Icon Mais" />
        <img src={iconNotification} alt="Icon notification" />
        <span>{countNotification}</span>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
