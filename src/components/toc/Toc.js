import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { useIsMobile } from '../../hooks/useIsMobile.js';

import './toc.scss';

export const Toc = ({
  resources,
  currentResource,
  setCurrentResource,
  isTocOpen,
  setIsTocOpen,
}) => {
  const isMobile = useIsMobile();

  const handleTocItemClick = (selectedResource) => {
    if (currentResource.id !== selectedResource.id) {
      setCurrentResource(selectedResource);

      if (isMobile) {
        setIsTocOpen(!isTocOpen);
      }
    }
  };

  const renderTocLoader = () => {
    return (
      <div className='tocLoader'>
        <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />
        <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />
        <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />
      </div>
    );
  };

  const renderTocItems = () => {
    return (
      <ul>
        {resources.map((resource) => (
          <li
            className={resource?.id === currentResource?.id ? 'current' : ''}
            key={resource.id}
            onClick={() => handleTocItemClick(resource)}>
            <div className='itemInnerContainer'>
              <svg className='ico-active'>
                <use xlinkHref='#ico-active' />
              </svg>
              <span>{resource.name}</span>
            </div>
            <svg className='ico-arrow-right'>
              <use xlinkHref='#ico-arrow-right' />
            </svg>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside className={`tocContainer ${isMobile && isTocOpen ? 'show' : ''}`}>
      <header className='tocHeader'>Items</header>
      {resources.length ? renderTocItems() : renderTocLoader()}
    </aside>
  );
};
