import React from 'react';

export default function Rate(props) {
  return (
    <div>
      <p>Рейтинг: {props.rate.rating}</p>
    </div>
  );
}