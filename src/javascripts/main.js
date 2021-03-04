import '../styles/main.scss';
import domBuilder from './components/domBuilder';

let full = 100;
let fun = 50;

const printScore = () => {
  document.querySelector('#fullScore').innerHTML = full;
  document.querySelector('#funScore').innerHTML = fun;
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

const buttonEvents = () => {
  document.querySelector('#healthy-food').addEventListener('click', foodEvent);
  document.querySelector('#unhealthy-food').addEventListener('click', foodEvent);
  document.querySelector('#fun-activity').addEventListener('click', funEvent);
  document.querySelector('#super-fun-activity').addEventListener('click', funEvent);
};

domBuilder();
buttonEvents();
printScore();
