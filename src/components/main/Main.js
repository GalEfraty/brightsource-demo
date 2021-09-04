import React, { useState, useEffect } from 'react';

import { getResources, getActions } from '../../services/dataService/fetchDataService.js';
import { SvgsSprite } from './SvgsSprite.js';
import { Header } from '../header/Header.js';
import { Toc } from '../toc/Toc.js';
import { Resource } from '../resource/Resource.js';
import { ErrorModal } from '../errorModal/ErrorModal.js';

import './main.scss';

export const Main = () => {
  const [resources, setResources] = useState([]);
  const [currentResource, setCurrentResource] = useState(null);
  const [actions, setActions] = useState([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getResources()
      .then((results) => {
        setResources(results);
        setCurrentResource(results[0]);
      })
      .catch((error) => setError(error));

    getActions()
      .then((results) => setActions(results))
      .catch((error) => setError(error));
  }, []);

  const getRelevantActions = () => {
    let relentActions = [];

    if (currentResource && actions.length) {
      const currentResourceActionsIds = currentResource['actionIds'];

      actions.forEach((action) => {
        if (currentResourceActionsIds.includes(action.id)) {
          relentActions.push(action);
        }
      });
    }

    return relentActions;
  };

  return (
    <div className='main'>
      <Header isTocOpen={isTocOpen} setIsTocOpen={setIsTocOpen} />
      <div className='mainContent'>
        <Toc
          resources={resources}
          currentResource={currentResource}
          setCurrentResource={setCurrentResource}
          isTocOpen={isTocOpen}
          setIsTocOpen={setIsTocOpen}
        />
        <Resource resource={currentResource} actions={getRelevantActions()} />
      </div>
      <ErrorModal error={error} setError={setError} />
      <div className='svgsSpriteContainer'>
        <SvgsSprite />
      </div>
    </div>
  );
};
