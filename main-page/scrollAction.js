import { section2Animation } from "./section2Js/section2Entry.js";
import { section3Intro } from "./section3Js/section3.js";
import { tubeIntro } from "./section4Js/tubeIntro.js";

let timer;
function scroll() {
  window.addEventListener("scroll", () => {
    let scrollPosition = Math.floor(window.scrollY || document.documentElement.scrollTop);
    section2Animation(scrollPosition);
    section3Intro(scrollPosition);
    tubeIntro(scrollPosition);  
    console.log(scrollPosition);
  });

  window.onload = () => {
    const sections = document.querySelectorAll(".section");
    const sectionCount = sections.length;

    const handleScroll = (event) => {
      event.preventDefault();
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let currentSectionIndex = -1;

        // Find the index of the currently visible section
        for (let i = 0; i < sectionCount; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (
            rect.top >= 0 &&
            window.getComputedStyle(sections[i]).display !== "none"
          ) {
            currentSectionIndex = i;
            break;
          }
        }

        // Scroll down: Move to the next section
        if (delta < 0) {
          if (currentSectionIndex < sectionCount - 1) {
            moveTop +=
              sections[currentSectionIndex + 1].getBoundingClientRect().top;
          }
        }
        // Scroll up: Move to the previous section
        else if (delta > 0) {
          if (currentSectionIndex > 0) {
            moveTop +=
              sections[currentSectionIndex - 1].getBoundingClientRect().top;
          }
        }

        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
      }, 200);
    };

    window.addEventListener("mousewheel", handleScroll, {
      passive: false,
    });
  };
}

export const scrollAction = () => {
  scroll();
};
