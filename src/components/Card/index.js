import React from 'react';
import * as S from './styles';

function Card({color, img, titulo , descricao}) {
  return (
    <S.Container color={color}>
        <img src={img} alt="Card"/>
        <p>{titulo}</p>
        <span>{descricao}</span>
    </S.Container>
  );
}

export default Card;
