// const text = document.querySelector('.txt-bx h2');

// const letters = [
//   "DEVELOPER Demuu",
//   "김인환"
// ];

// const speed = 80;
// let i = 0;
// let isTyping = true;

// const typing = async () => {
//   const letter = letters[i].split("");

//   while (letter.length && isTyping) {
//     await wait(speed);
//     text.innerHTML += letter.shift();
//   }

//   if (i === 0) {
//     await wait(500);
//     remove();
//   } else {
//     isTyping = false;
//   }
// }

// // 글자 지우는 효과
// const remove = async () => {
//   const letter = text.innerHTML.split("");

//   while (letter.length > "DEVELOPER ".length && isTyping) {
//     await wait(speed);

//     letter.pop();
//     text.innerHTML = letter.join("");
//   }

//   if (i < letters.length - 1 && isTyping) {
//     i++;
//     typing();
//   }
// }

// // 딜레이 기능 ( 마이크로초 )
// function wait(ms) {
//   return new Promise(res => setTimeout(res, ms));
// }

// // 초기 실행
// setTimeout(() => {
//   typing();
// }, 500);


// const body = document.querySelector('body');
// const screen = document.querySelector('.loading-screen');

// body.style.overflowY = 'hidden';
// setTimeout(() => {
//   screen.style.opacity = '0';
//   body.style.overflowY = 'scroll';

//   setTimeout(() => {
//     screen.style.display = 'none';
//   },500)  
// }, 4000)