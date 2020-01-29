import React from 'react';
import CardEvent from './CardEvent';

const CardList = props => (
    <div>
      {props.cards.map(card => (
        <CardEvent {...card} />
      ))}
    </div>
  )

  export default CardList;