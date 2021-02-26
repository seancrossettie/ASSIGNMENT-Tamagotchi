import '../styles/main.scss';

const printToDom = (divId, string) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
};

const quadValues = [
  {
    name: 'Eat',
    startingValue: 100,
    buttonOne: 10,
    buttonOneName: 'Healthy Food',
    buttonTwo: -3,
    buttonTwoName: 'Unhealthy Food'
  },
  {
    name: 'Play',
    startingValue: 50,
    buttonOne: 50,
    buttonOneName: 'Super Fun Activity',
    buttonTwo: 2,
    buttonTwoName: 'Fun Activity'
  },
  {
    name: 'Strength',
    startingValue: 100,
    buttonOne: 1,
    buttonOneName: 'Run Away',
    buttonTwo: -10,
    buttonTwoName: 'Commit Violence'
  },
  {
    name: 'Sleep',
    startingValue: 50,
    buttonOne: 50,
    buttonOneName: 'Nap',
    buttonTwo: 60,
    buttonTwoName: 'Deep Sleep'
  },
];

const quadPrinter = (quadArray) => {
  let quadString = '';

  quadArray.forEach((quad) => {
    quadString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="${quad.name}"></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`;
  });

  printToDom(quadString, '#progress');
};

quadPrinter(quadValues);
