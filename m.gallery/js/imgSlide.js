export const imgSlide = () => {
  let start_x, end_x;
  const slides = document.querySelector('.slides');

  slides.addEventListener('touchstart', touch_start);
  slides.addEventListener('touchend', touch_end);

  function touch_start(e){
  start_x = e.touches[0].pageX;
  }

  function touch_end(e) {
    end_x = e.changedTouches[0].pageX;
    if(start_x > end_x){
      next();
    }else{
      prev();
    }
  }

  let position = 0;

  function prev(){
    if (position < 0) {
      position = position + 20;
    } else {
      position = -80;
    }
    slides.style.transform = "translateX(" + position + "%) translate3d(0, 0, 0)";
  }


  function next(){
    if (position > -80) {
      position = position - 20;
    } else {
      position = 0;
    }
    slides.style.transform = "translateX(" + position + "%) translate3d(0, 0, 0)";
  }
};