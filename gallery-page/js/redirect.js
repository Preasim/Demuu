const redirectURL = "http://demuu.dothome.co.kr/m.gallery/gallery.html";

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