import '../styles/main.scss';
import domBuilder from './components/domBuilder';

let full = 100;
let fun = 50;
let strength = 100;
let energy = 50;

const printScore = () => {
  document.querySelector('#fullScore').innerHTML = full;
  document.querySelector('#funScore').innerHTML = fun;
  document.querySelector('#fightScore').innerHTML = strength;
  document.querySelector('#sleepScore').innerHTML = energy;
};

const foodEvent = (e) => {
  const targetId = e.target.id;
  if (targetId === 'healthy-food') {
    if (full + 10 < 100) {
      full += 10;
      printScore();
    } else if (full + 10 > 100) {
      full = 100;
      printScore();
    }
  } else if (targetId === 'unhealthy-food') {
    full -= 3;
    printScore();
  }
};

const funEvent = (e) => {
  const targetId = e.target.id;
  if (targetId === 'fun-activity') {
    if (fun + 2 < 100) {
      fun += 2;
      printScore();
    } else if (fun + 2 > 100) {
      fun = 100;
      printScore();
    }
  } else if (targetId === 'super-fun-activity') {
    if (fun + 50 < 100) {
      fun += 50;
      printScore();
    } else if (fun + 50 > 100) {
      fun = 100;
      printScore();
    }
  }
};

const fightEvent = (e) => {
  const targetId = e.target.id;
  if (targetId === 'run-away') {
    if (strength + 1 < 100) {
      strength += 1;
      printScore();
    } else if (strength + 1 >= 100) {
      strength = 100;
      printScore();
    }
  } else if (targetId === 'commit-violence') {
    strength -= 10;
    printScore();
  }
};

const sleepEvent = (e) => {
  const targetId = e.target.id;
  if (targetId === 'nap') {
    if (energy + 50 <= 100) {
      energy += 50;
      printScore();
    } else if (energy + 50 >= 100) {
      energy = 100;
      printScore();
    }
  } else if (targetId === 'deep-sleep') {
    if (energy + 60 <= 100) {
      energy += 60;
      printScore();
    } else if (energy + 60 >= 100) {
      energy = 100;
      printScore();
    }
  }
};

const sleepCounter = () => {
  energy -= 1;
  printScore();
};

const buttonEvents = () => {
  document.querySelector('#healthy-food').addEventListener('click', foodEvent);
  document.querySelector('#unhealthy-food').addEventListener('click', foodEvent);
  document.querySelector('#fun-activity').addEventListener('click', funEvent);
  document.querySelector('#super-fun-activity').addEventListener('click', funEvent);
  document.querySelector('#run-away').addEventListener('click', fightEvent);
  document.querySelector('#commit-violence').addEventListener('click', fightEvent);
  document.querySelector('#nap').addEventListener('click', sleepEvent);
  document.querySelector('#deep-sleep').addEventListener('click', sleepEvent);
};

const init = () => {
  domBuilder();
  buttonEvents();
  printScore();
  setInterval(sleepCounter, 2000);
};

init();
