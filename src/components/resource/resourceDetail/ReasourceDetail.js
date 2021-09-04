import React from 'react';

import './reasourceDetail.scss';

export const ReasourceDetail = ({ detailKey, detailValue }) => {
  return (
    <li className='reasourceDetail'>
      <label htmlFor={`#${detailKey}`}>{detailKey}</label>
      <div id={detailKey}>{detailValue}</div>
    </li>
  );
};
