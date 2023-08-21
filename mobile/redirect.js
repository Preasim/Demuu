const redirectURL = "http://demuu.dothome.co.kr/main-page/index.html";

const isMobile = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function redirectOn(){
  if (!isMobile()) window.location.replace(redirectURL);
}

redirectOn();