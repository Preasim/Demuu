import { toggleCode } from './toggleCode.js';

const windowWidth = window.innerWidth;

const toggleData = [
  { className: '.toggle-code-1', classBtnName: '.tcb1', trClass: '.tr1', tdClass: '.td1', height: '1300px', isOpen: false }
];

toggleData.forEach(data => {
  toggleCode(data, windowWidth);
});