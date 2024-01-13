import { toggleCode } from '../uncoverPage/toggleCode.js';

const windowWidth = window.innerWidth;

const toggleData = [
  { className: '.toggle-code-1', classBtnName: '.tcb1', trClass: '.tr1', tdClass: '.td1', height: '1425px', isOpen: false },
  { className: '.toggle-code-2', classBtnName: '.tcb2', trClass: '.tr2', tdClass: '.td2', height: '520px', isOpen: false },
  { className: '.toggle-code-3', classBtnName: '.tcb3', trClass: '.tr3', tdClass: '.td3', height: '1110px', isOpen: false },
  { className: '.toggle-code-4', classBtnName: '.tcb4', trClass: '.tr4', tdClass: '.td4', height: '1110px', isOpen: false }
];

toggleData.forEach(data => {
  toggleCode(data, windowWidth);
});