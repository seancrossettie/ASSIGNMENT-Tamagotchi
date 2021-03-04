import '../styles/main.scss';
import domBuilder from './components/domBuilder';

let full = 100;

const printScore = () => {
  document.querySelector('#fullScore').innerHTML = full;
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

const buttonEvents = () => {
  document.querySelector('#healthy-food').addEventListener('click', foodEvent);
  document.querySelector('#unhealthy-food').addEventListener('click', foodEvent);
};

domBuilder();
buttonEvents();
printScore();
