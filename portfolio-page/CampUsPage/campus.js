import { toggleCode } from '../uncoverPage/toggleCode.js';

const windowWidth = window.innerWidth;

const toggleData = [
  { className: '.toggle-code-1', classBtnName: '.tcb1', trClass: '.tr1', tdClass: '.td1', height: '2155px', isOpen: false }
];

toggleData.forEach(data => {
  toggleCode(data, windowWidth);
});

window.addEventListener('resize', function() {
  toggleData.forEach(data => {
    toggleCode(data, window.innerWidth);
  });
});