/*
  * This service demonstate fetching data from an api in an async way,
    since you told me you are using Axios (which returns promises).
  * The provided links for the task didn't return a valid json,
    so I assumed that there are 2 available api requests: 
    1. getActions: get all actions array
    2. get resources: get all resources array.

    provided links:

    1. resources - https://json.extendsclass.com/bin/7e8a0a720dcd
    2. actions - https://json.extendsclass.com/bin/42e6076482ec   
*/

const data = require('./data.json');

export const getActions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.actions) {
        resolve(data.actions);
      }

      reject('No actions found.');
    }, 900);
  });
};

export const getResources = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.resources) {
        resolve(data.resources);
      }

      reject('No resources found.');
    }, 900);
  });
};
