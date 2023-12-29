const redirectURL = "https://preasim.github.io/Demuu/mobile/mobile.html";

const isMobile = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function redirectOn(){
  if (isMobile()) window.location.replace(redirectURL);
}

redirectOn();