import React from 'react';
import Button from 'react-bootstrap/Button';

import { useIsMobile } from '../../hooks/useIsMobile.js';

import './header.scss';

export const Header = ({ isTocOpen, setIsTocOpen }) => {
  const isMobile = useIsMobile();

  return (
    <header className='header'>
      <h1>Demo App</h1>
      {isMobile ? (
        <Button variant='light' onClick={() => setIsTocOpen(!isTocOpen)}>
          {isTocOpen ? (
            'x'
          ) : (
            <svg className='ico-arrow-right'>
              <use xlinkHref='#ico-arrow-right' />
            </svg>
          )}
          <span>{isTocOpen ? 'Hide items' : 'Show items'}</span>
        </Button>
      ) : null}
    </header>
  );
};
