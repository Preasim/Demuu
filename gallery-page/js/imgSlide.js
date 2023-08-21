export const imgSlide = () => {
  const slides = document.querySelector(".slides");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  const bright = document.querySelector(".bright");
  
  const slide1 = document.querySelector(".si1"),
    slide2 = document.querySelector(".si2"),
    slide3 = document.querySelector(".si3"),
    slide4 = document.querySelector(".si4"),
    slide5 = document.querySelector(".si5");

  const slide2Bx = document.querySelector('#layer-1'),
        slide3Bx = document.querySelector('.h video'),
        slide4Bx = document.querySelectorAll('.wave'),
        slide5Bx = document.querySelectorAll('.poster__body svg g');

        
  let position = -30;

  prevBtn.addEventListener("click", () => {
    if (position < 10) {
      position = position + 20;
    } else {
      position = -70;
    }
    slides.style.transform = "translateX(" + position + "%) translate3d(0, 0, 0)";
    inactive();

    //왼쪽 슬라이드 클릭시 작동
    bright.style.opacity = `0`;
    setTimeout(() => {
      bright.style.opacity = `1`;
    }, 500);

  });

  nextBtn.addEventListener("click", () => {
    if (position > -70) {
      position = position - 20;
    } else {
      position = 10;
    }
    slides.style.transform = "translateX(" + position + "%) translate3d(0, 0, 0)";

    //오른쪽 슬라이드 클릭시 작동
    bright.style.opacity = `0`;
    setTimeout(() => {
      bright.style.opacity = `1`;
    }, 500);
    inactive();
  });

  function inactive() {
    if (position == -70) {
      slide1.classList.remove("inactive");
      slide2.classList.remove("inactive");
      slide3.classList.remove("inactive");
      slide5.classList.remove("inactive");
      slide4.classList.add("inactive");

      slide5.classList.add("slide-hover");
      slide1.classList.remove("slide-hover");
      slide2.classList.remove("slide-hover");
      slide3.classList.remove("slide-hover");
      slide4.classList.remove("slide-hover");

      slide2Bx.classList.remove('holder-animation');
      slide3Bx.pause();
      slide4Bx.forEach(w => {
        w.classList.remove('wave-animation');
      });
      slide5Bx.forEach(g => {
        g.classList.add('poster-animation');
      });

    } else if (position == -50) {
      slide1.classList.remove("inactive");
      slide2.classList.remove("inactive");
      slide4.classList.remove("inactive");
      slide3.classList.add("inactive");
      slide5.classList.add("inactive");

      slide4.classList.add("slide-hover");
      slide1.classList.remove("slide-hover");
      slide2.classList.remove("slide-hover");
      slide3.classList.remove("slide-hover");
      slide5.classList.remove("slide-hover");

      slide2Bx.classList.remove('holder-animation');
      slide3Bx.pause();
      slide4Bx.forEach(w => {
        w.classList.add('wave-animation');
      });
      slide5Bx.forEach(g => {
        g.classList.remove('poster-animation');
      });

    } else if (position == -30) {
      slide1.classList.remove("inactive");
      slide3.classList.remove("inactive");
      slide5.classList.remove("inactive");
      slide2.classList.add("inactive");
      slide4.classList.add("inactive");

      slide3.classList.add("slide-hover");
      slide1.classList.remove("slide-hover");
      slide2.classList.remove("slide-hover");
      slide4.classList.remove("slide-hover");
      slide5.classList.remove("slide-hover");

      slide2Bx.classList.remove('holder-animation');
      slide3Bx.play();
      slide4Bx.forEach(w => {
        w.classList.remove('wave-animation');
      });
      slide5Bx.forEach(g => {
        g.classList.remove('poster-animation');
      });

    } else if (position == -10) {
      slide2.classList.remove("inactive");
      slide4.classList.remove("inactive");
      slide5.classList.remove("inactive");
      slide1.classList.add("inactive");
      slide3.classList.add("inactive");

      slide2.classList.add("slide-hover");
      slide1.classList.remove("slide-hover");
      slide3.classList.remove("slide-hover");
      slide4.classList.remove("slide-hover");
      slide5.classList.remove("slide-hover");

      slide2Bx.classList.add('holder-animation');
      slide3Bx.pause();
      slide4Bx.forEach(w => {
        w.classList.remove('wave-animation');
      });
      slide5Bx.forEach(g => {
        g.classList.remove('poster-animation');
      });

    } else if (position == 10) {
      slide1.classList.remove("inactive");
      slide3.classList.remove("inactive");
      slide4.classList.remove("inactive");
      slide5.classList.remove("inactive");
      slide2.classList.add("inactive");

      slide1.classList.add("slide-hover");
      slide2.classList.remove("slide-hover");
      slide3.classList.remove("slide-hover");
      slide4.classList.remove("slide-hover");
      slide5.classList.remove("slide-hover");

      slide2Bx.classList.remove('holder-animation');
      slide3Bx.pause();
      slide4Bx.forEach(w => {
        w.classList.remove('wave-animation');
      });
      slide5Bx.forEach(g => {
        g.classList.remove('poster-animation');
      });

    }
  }
  inactive();
};