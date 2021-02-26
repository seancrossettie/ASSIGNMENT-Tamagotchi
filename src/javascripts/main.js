import '../styles/main.scss';

import printToDom from './helpers/printToDom';

const full = {
  name: 'Eat',
  startingValue: 100,
  buttonOneName: 'Healthy Food',
  buttonOneId: 'healthyFood',
  buttonOne: 10,
  buttonTwoName: 'Unhealthy Food',
  buttonTwoId: 'unhealthyFood',
  buttonTwo: -3,
};
const fun = {
  name: 'Play',
  startingValue: 50,
  buttonOneName: 'Super Fun Activity',
  buttonOneId: 'superFunActivity',
  buttonOne: 50,
  buttonTwoName: 'Fun Activity',
  buttonTwoId: 'funActivity',
  buttonTwo: 2,
};
const strength = {
  name: 'Strength',
  startingValue: 100,
  buttonOneName: 'Run Away',
  buttonOneId: 'runAway',
  buttonOne: 1,
  buttonTwoName: 'Commit Violence',
  buttonTwoId: 'commitViolence',
  buttonTwo: -10,
};
const energy = {
  name: 'Sleep',
  startingValue: 50,
  buttonOneName: 'Nap',
  buttonOneId: 'nap',
  buttonOne: 50,
  buttonTwoName: 'Deep Sleep',
  buttonTwoId: 'deepSleep',
  buttonTwo: 60,
};

const quadPrinter = (quad, divId) => {
  const cardstring = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${quad.name}</h5>
    <p class="card-text">${quad.startingValue}</p>
    <button class="btn btn-primary" id="${quad.buttonOneId}">${quad.buttonOneName}</button>
    <button class="btn btn-primary" id="${quad.buttonTwoId}">${quad.buttonTwoName}</button>
  </div>
</div>`;
  printToDom(cardstring, divId);
};

quadPrinter(full, '#eat');
quadPrinter(fun, '#play');
quadPrinter(strength, '#fight');
quadPrinter(energy, '#sleep');
