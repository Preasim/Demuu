import { toggleCode } from '../uncoverPage/toggleCode.js';

const windowWidth = window.innerWidth;

const toggleData = [
  { className: '.toggle-code-4', classBtnName: '.tcb4', trClass: '.tr4', tdClass: '.td4', height: '1425px', isOpen: false },
  { className: '.toggle-code-5', classBtnName: '.tcb5', trClass: '.tr5', tdClass: '.td5', height: '520px', isOpen: false },
  { className: '.toggle-code-6', classBtnName: '.tcb6', trClass: '.tr6', tdClass: '.td6', height: '8460px', isOpen: false }
];

toggleData.forEach(data => {
  toggleCode(data, windowWidth);
});

window.addEventListener('resize', function() {
  toggleData.forEach(data => {
    toggleCode(data, window.innerWidth);
  });
});