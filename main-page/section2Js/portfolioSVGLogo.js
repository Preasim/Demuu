const xmlns = "http://www.w3.org/2000/svg";
const xlinkns = "http://www.w3.org/1999/xlink";

const select = function (s) {
  return document.querySelector(s);
};

const pContainer = select("#pContainer");
const particlePool = [];
const numParticles = 90;
const mainLogo = select("#mainLogo");

// 기존 경로
const mainLogoPath = mainLogo.getAttribute("d");

// 새로 추가한 경로
const newPathD = "M171.449051,433.299988 \
                C177.393112,453.522491 183.375900,473.733673 189.273132,493.969818 \
                C201.393127,535.559143 213.471085,577.160767 225.558975,618.759460 \
                C232.875519,643.938293 240.153000,669.128601 247.494293,694.300232 \
                C254.882477,719.632690 262.396851,744.928589 269.686646,770.289185 \
                C271.049255,775.029663 273.382294,776.784851 278.515656,776.743408 \
                C309.346100,776.494690 340.179596,776.628296 371.012085,776.625732 \
                C378.385345,776.625122 378.962830,775.598511 376.812897,768.430481 \
                C368.422943,740.458191 360.094360,712.467102 351.851074,684.451233 \
                C341.502991,649.281799 331.323486,614.062622 320.956970,578.898621 \
                C308.664520,537.201538 296.191437,495.557587 283.905212,453.858582 \
                C270.864929,409.600220 257.990875,365.292877 244.970154,321.028717 \
                C235.927505,290.288055 226.688370,259.604980 217.724289,228.841614 \
                C216.370911,224.197052 213.885437,222.351135 209.172470,222.363525 \
                C178.173569,222.445129 147.174316,222.381607 116.175247,222.417389 \
                C110.754898,222.423645 110.305000,223.048141 111.842384,228.328400 \
                C117.598061,248.096802 123.461494,267.833832 129.212677,287.603546 \
                C143.261841,335.897522 157.270920,384.203217 171.449051,433.299988";

const particleColorArray = [
  "#eeeeee",
  "#bdbdbd",
  "#757575",
  "#424242",
  "#000",
  "#fafafa",
  "#424242",
];
const mainTl = new TimelineMax();

TweenMax.set("svg", {
  visibility: "visible",
});

// 경로를 비지어로 변환
const logoBezier = MorphSVGPlugin.pathDataToBezier(mainLogoPath);
const newLogoBezier = MorphSVGPlugin.pathDataToBezier(newPathD); // 추가 경로를 비지어로 변환

function createParticles(logoBezierPath, numParticlesToCreate = numParticles) {
  let i = numParticlesToCreate;
  let p;
  while (--i > -1) {
    p = document.createElementNS(xmlns, "use");
    pContainer.appendChild(p);
    p.setAttributeNS(xlinkns, "xlink:href", "#particle");
    p.setAttributeNS(
      null,
      "fill",
      particleColorArray[i % particleColorArray.length]
    );
    p.setAttribute("class", "particle");

    const val = randomBetween(10, 50) / 10;
    TweenMax.set(p, {
      scale: val,
      transformOrigin: "50% 50%",
    });

    const t = TweenMax.to(p, val * 3.4, {
      bezier: {
        type: "cubic",
        values: logoBezierPath,
        autoRotate: false,
      },
      repeat: -1,
      ease: Linear.easeNone,
    });

    mainTl.add(t, i / 10);
    particlePool.push(p);
  }
  mainTl.seek(100);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 기존 경로와 새 경로로 각각 입자 생성
export const portfolioLogo = () => {
  createParticles(logoBezier);       // 기존 경로에 입자 생성
  createParticles(newLogoBezier, 40);    // 새 경로에 입자 수를 50개로 줄임
};

TweenMax.set("#wholeLogo", {
  x: 40,
});

TweenMax.globalTimeScale(0.75);
