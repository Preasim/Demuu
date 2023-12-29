export const section2Animation = (() => {
  let hasRun = true;

  return (scrollPosition) => {
    const portfolioLogo = document.querySelector(".portfolio-logo");
    const portfolioName = document.querySelector(".portfolio-logo-name");
    const triangle = document.querySelector(".triangle");

    const minorTitle = document.querySelector(".minor-title");
    const sentences1 = document.querySelector(".sentences1");
    const sentences2 = document.querySelector(".sentences2");

    const arrow = document.querySelector(".portfolio-arrow");

    // section2 position
    let section2Top = Math.floor(window.scrollY + document.querySelector("#section2").getBoundingClientRect().top);

    if (scrollPosition === section2Top && hasRun) {
      hasRun = false;

      setTimeout(() => {
        triangle.style.display = "block";
        portfolioLogo.style.width = "40%";
        setTimeout(() => {
          portfolioName.style.opacity = "1";
        }, 700);
      }, 2000);

      setTimeout(() => {
        arrow.style.opacity = "1";
      }, 9000);

      function typeText(text, targetElement, delay) {
        const speed = 40;
        const changeLineBreak = (letter) => {
          return letter.map((text) => (text === "\n" ? "<br>" : text));
        };

        return new Promise(async (resolve) => {
          await wait(delay);

          const letter = changeLineBreak(text.split(""));
          while (letter.length) {
            await wait(speed);
            targetElement.innerHTML += letter.shift();
          }
          await wait(800);
          targetElement.classList.remove("stn-after");
          resolve();
        });
      }

      function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      setTimeout(async () => {
        const minorPromise = typeText(
          '"세상을 변화시키는 가장 강력한 힘은 코드이다.',
          minorTitle,
          0 // minorTitle 타이핑 시작 시간 설정 (즉시 시작)
        );

        const sentences1Promise = typeText(
          "코드를 작성할 때 \n 단순히 기계에게 명령을 내리는 것이 아니라, 아이디어와 개념을 현실로 만들고 있는 것입니다. \n 즉 프로그래밍은 창의력을 표현할 수 있는 가장 아름다운 수단 중 하나라고 생각합니다.",
          sentences1,
          1000 // sentences1 타이핑 시작 시간 설정 (1초 후 시작)
        );

        const sentences2Promise = typeText(
          "어떤 분야든 배움에는 끝이 없습니다. \n 겸손한 자세를 잃지 않고 지속적인 학습을 추구하여 \n 트렌드에 맞춰 빠르게 발전하는 개발자가 되겠습니다.",
          sentences2,
          2000 // sentences2 타이핑 시작 시간 설정 (2초 후 시작)
        );

        await Promise.all([
          minorPromise,
          sentences1Promise,
          sentences2Promise,
        ]);
      }, 3000);

      setTimeout(() => {
        document.querySelector(".section2-down-arrow").style.opacity = "1";
      }, 10000);
    }
  };
})();
