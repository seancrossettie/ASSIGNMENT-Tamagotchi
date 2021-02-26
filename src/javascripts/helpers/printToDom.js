const printToDom = (string, divId) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = string;
};

export default printToDom;
