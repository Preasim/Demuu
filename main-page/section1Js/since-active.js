// let firstActive = true;

// export function removeSinceActive(currentSlide, transitionTime) {
//   const sinceItemBar = document.querySelectorAll(".item-bar");
//   const sinceItemTxt = document.querySelectorAll(".item-txt");
//   const sinceBars = document.querySelectorAll(".item-bar2");
//   firstActive = false;

//   setTimeout(() => {
//     sinceItemBar[currentSlide - 1].classList.remove("item-bar-active");
//     sinceItemTxt[currentSlide - 1].classList.remove("item-txt-active");
//     sinceBars[currentSlide - 1].classList.remove("item-bar2-active");
//   }, transitionTime);
// }

// export function sinceActive(currentSlide, transitionTime) {
//   const sinceItemBar = document.querySelectorAll(".item-bar");
//   const sinceItemTxt = document.querySelectorAll(".item-txt");
//   const sinceBars = document.querySelectorAll(".item-bar2");

//   /* 
//     최초 실행시 3초동안 확대된 이미지를 보여줌 -> 줄어듬과 동시에 sinceActive시작 ->
//     이미지가 작아지는데 필요한 transition 1초를 settimerout을 사용하여 작업
//     함 이후의 슬라이드는 이미지가 작아지는데 시간이 따로 필요하지 않기 때문에
//     settimeout을 사용할 이유가 없음
//   */
//   if (firstActive) {
//     setTimeout(() => {
//       sinceItemTxt[currentSlide].classList.add("item-txt-active");
//       sinceItemBar[currentSlide].classList.add("item-bar-active");
//       sinceBars[currentSlide].classList.add("item-bar2-active");
//       removeSinceActive(currentSlide, transitionTime);
//     }, 1000);
//     return;
//   }

//   if (currentSlide <= 3) {
//     removeSinceActive(currentSlide, transitionTime);
//   } else {
//     currentSlide = 0;
//     removeSinceActive(4, transitionTime);
//   }
//   sinceItemTxt[currentSlide].classList.add("item-txt-active");
//   sinceItemBar[currentSlide].classList.add("item-bar-active");
//   sinceBars[currentSlide].classList.add("item-bar2-active");
// }