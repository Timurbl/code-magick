const renderRandomData = function (element) {
  const randomNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const randomSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const randomCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const randomEyesColors = ['black', 'blue', 'red', 'yellow', 'green'];


  element.querySelector('.setup-similar-label').textContent =
    randomNames[Math.floor(Math.random() * randomNames.length)] + ' '
    + randomSurnames[Math.floor(Math.random() * randomSurnames.length)];
  element.querySelector('.wizard-coat').style.fill =
    randomCoatColors[Math.floor(Math.random() * randomCoatColors.length)];
  element.querySelector('.wizard-eyes').style.fill =
    randomEyesColors[Math.floor(Math.random() * randomEyesColors.length)];
};

const setup = document.querySelector('.setup');
setup.classList.remove('hidden');

const wizardsList = document.querySelector('.setup-similar-list');
const template = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');


for (let i = 0; i < 4; i++) {
  const wizard = template.cloneNode(true);
  renderRandomData(wizard);
  wizardsList.appendChild(wizard);
}

document.querySelector('.setup-similar').classList.remove('hidden');
