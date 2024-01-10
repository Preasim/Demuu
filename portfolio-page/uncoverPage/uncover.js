import { toggleCode } from './toggleCode.js';

const windowWidth = window.innerWidth;

const toggleData = [
  { className: '.toggle-code-1', classBtnName: '.tcb1', trClass: '.tr1', tdClass: '.td1', height: '600px', isOpen: false },
  { className: '.toggle-code-2', classBtnName: '.tcb2', trClass: '.tr2', tdClass: '.td2', height: '1700px', isOpen: false },
  { className: '.toggle-code-3', classBtnName: '.tcb3', trClass: '.tr3', tdClass: '.td3', height: '1300px', isOpen: false }
];

toggleData.forEach(data => {
  toggleCode(data, windowWidth);
});