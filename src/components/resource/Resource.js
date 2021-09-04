import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { ReasourceDetail } from './resourceDetail/ReasourceDetail.js';

import './resource.scss';

export const Resource = ({ resource, actions }) => {
  const renderTitle = () => {
    return (
      <h2>
        {resource ? (
          resource.name
        ) : (
          <Spinner as='span' animation='grow' size='sm' role='status' aria-hidden='true' />
        )}
      </h2>
    );
  };

  const renderResourceDetails = () => {
    return (
      <div className='resourceDetails'>
        <header>
          <h3>General Details</h3>
          <svg className='ico-help'>
            <use xlinkHref='#ico-help' />
          </svg>
        </header>
        <ul>
          {Object.entries(resource).map((detail) => {
            if (detail[0] !== 'actionIds' && detail[0] !== 'id') {
              return (
                <ReasourceDetail detailKey={detail[0]} detailValue={detail[1]} key={detail[0]} />
              );
            } else return null;
          })}
        </ul>
      </div>
    );
  };

  const renderResourceActions = () => {
    return (
      <div className='reaourceActions'>
        <header>
          <h3>Permitted Actions</h3>
          <svg className='ico-help'>
            <use xlinkHref='#ico-help' />
          </svg>
        </header>
        <ul>
          {actions.map((action) => (
            <li key={action.id}>{action.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className='resourceWrapper'>
      <div className='resourceContainer'>
        <header className='resourceHeader'>{renderTitle()}</header>
        <div className='resourceBody'>
          {resource && renderResourceDetails()}
          {resource && renderResourceActions()}
        </div>
      </div>
    </section>
  );
};
