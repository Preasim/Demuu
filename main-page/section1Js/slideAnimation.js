import { changeTextAnimation } from "./TextAnimation.js";
// import { sinceActive } from "./since-active.js";

const carouselUl = document.querySelector(".carosel");
const innerWidth = window.innerWidth;
const transionTime = 1;
//가장 처음 이미지가 줄어드는 시간을 조절하는 변수 현재 3초
const firstImageScaleDownTiming = 3000;
//1000은 transition이 끝나자 마자 scaleUp시작
let scaleUpTiming = transionTime * 1200;
//스케일 up이 끝나고 다시 줄어들 타이밍 1000은 1초 뒤
const scaleDownTiming = scaleUpTiming + transionTime * 1000 + 1000;
let setTimeOutTime = 0;
let timeId = "";
let currentItemLength = 0;
let currentSlide = 1;
let timer = 4000;

const createCopy = () => {
  const caroselItem = document.querySelectorAll(".carosel li");
  const copyLastItem = caroselItem[caroselItem.length - 1].cloneNode(true);
  const copyFirstItem = caroselItem[0].cloneNode(true);
  copyFirstItem.childNodes[1].classList.remove("widthUp");
  carouselUl.insertAdjacentElement("afterbegin", copyLastItem);
  carouselUl.insertAdjacentElement("beforeend", copyFirstItem);
  setCarouselWidth();
};

const setCarouselWidth = () => {
  currentItemLength = document.querySelectorAll(".carosel li").length;
  carouselUl.style.width = currentItemLength * innerWidth + "px";
  initSlidePosition();
};

const initSlidePosition = () => {
  let moveX = currentSlide * innerWidth;
  carouselUl.style.transition = "0s";
  carouselUl.style.transform = `translateX(-${moveX}px)`;
  autoPlay(timer);
  firstSlideInit();
};

/**
 * 처음 이미지 축소되는 시간은 settimeout 시간 바꾸면 됌
 */
const firstSlideInit = () => {
  const Slide = document.querySelectorAll(".carosel li div")[1];
  changeTextAnimation(0);
  setTimeout(() => {
    Slide.classList.remove("widthUp");
    // sinceActive(currentSlide, transionTime);
  }, firstImageScaleDownTiming);
};

const imageScaleDown = (currentSlide) => {
  setTimeout(() => {
    const Slide = document.querySelectorAll(".carosel li div");
    Slide[currentSlide].classList.remove("widthUp");
  }, scaleDownTiming);
};

const imageScaleUp = (currentSlide) => {
  setTimeout(() => {
    const Slide = document.querySelectorAll(".carosel li div");
    Slide[currentSlide].classList.add("widthUp");
  }, scaleUpTiming);
};

const fistSlideDownAni = () => {
  const Slide = document.querySelectorAll(".carosel li div")[1];
  setTimeout(() => {
    Slide.style.transition = `${transionTime}s`;
    Slide.classList.remove("widthUp");
  }, scaleDownTiming - (scaleUpTiming + transionTime * 1000));
};

const imageSlide = () => {
  // sinceActive(currentSlide, transionTime);
  changeTextAnimation(currentSlide);
  carouselUl.style.transition = `${transionTime}s`;
  currentSlide++;

  let moveX = currentSlide * innerWidth;
  carouselUl.style.transform = `translateX(-${moveX}px)`;
  imageScaleUp(currentSlide);
  imageScaleDown(currentSlide);

  if (currentSlide === currentItemLength - 1) {
    imageScaleUp(currentSlide);
    imageScaleUp(1);
    clearInterval(timeId);

    transionTime === 1
      ? (setTimeOutTime = 1000 + scaleUpTiming)
      : (setTimeOutTime = transionTime * 1000 + scaleUpTiming);

    setTimeout(() => {
      currentSlide = 1;
      carouselUl.style.transition = "0s";
      moveX = currentSlide * innerWidth;
      carouselUl.style.transform = `translateX(-${moveX}px)`;
      fistSlideDownAni();

      setTimeout(() => {
        // sinceActive(currentSlide, transionTime);
        changeTextAnimation(currentSlide);
        currentSlide++;
        moveX = currentSlide * innerWidth;
        carouselUl.style.transition = `${transionTime}s`;
        carouselUl.style.transform = `translateX(-${moveX}px)`;
        imageScaleUp(currentSlide);
        imageScaleDown(currentSlide);
        autoPlay(timer);
      }, timer - (transionTime * 1000 + scaleUpTiming));
    }, setTimeOutTime);
  }
};

const autoPlay = (time) => {
  timeId = setInterval(imageSlide, time);
};

export const initCaroselUl = () => {
  if(window.innerWidth > 768) {
    createCopy();
  }
};