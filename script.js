'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnShowModalWindow = document.querySelectorAll('.show-modal-window');

const ShowModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHiddenClass = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModalWindow.length; i++) {
  btnShowModalWindow[i].addEventListener('click', ShowModalWindow);
}

btnCloseModalWindow.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    addHiddenClass();
  }
  if (e.key === 'Enter' && modalWindow.classList.contains('hidden')) {
    ShowModalWindow();
  }
});
