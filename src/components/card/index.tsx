import React from 'react';
import CardStyles from './card.module.scss';

export interface CardPropsType {
  label: string;
  children: React.ReactChild[];
}

const Card: React.SFC<CardPropsType> = ({ label = 'card', children }) => {
  return (
    <div className={CardStyles.card_container}>
      <div className={CardStyles.card_header}>{label}</div>
      <div className={CardStyles.card_body}>{children}</div>
    </div>
  );
};

export default Card;
