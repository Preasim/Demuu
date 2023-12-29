export const loadingScreen = () => {

  const section3Title = document.querySelector('.loading-title');
  const introBackground1 = document.querySelector('.bg-left');
  const introBackground2 = document.querySelector('.bg-right');
  const introWhiteBackground = document.querySelector('.intro-background-white');

  const header = document.querySelector('header');
  const galleryContainer = document.querySelector('.gallery-container');
  const gallery = document.querySelector('.gallery');

  setTimeout(() => {
    section3Title.style.display = 'block';
    introBackground1.style.display = 'block';
    introBackground2.style.display = 'block';
    introWhiteBackground.style.display = 'block';
  },10)

  setTimeout(() => {
    gallery.style.background = '#222';
    section3Title.style.opacity = '1';
    section3Title.style.transform = 'translate(-50%, -50%) rotate(-0.003deg)';

    setTimeout(() => {
      introBackground1.style.width = "10vw";
      introBackground2.style.width = "10vw";

      setTimeout(() => {
        introBackground1.style.transition = 'all .7s';
        introBackground2.style.transition = 'all .7s';
        introBackground1.style.width = '50vw';
        introBackground2.style.width = '50vw';

        setTimeout(() => {
          introBackground1.style.height = '0';
          introBackground2.style.height = '0';

          setTimeout(() => {
            introWhiteBackground.style.height = '90vh';
            
            setTimeout(() => {
              section3Title.style.transform = 'translate(-50%, 100%)'
              section3Title.style.opacity = '0';
            }, 100);

            setTimeout(() => {
              introWhiteBackground.style.transition = 'all .7s';
              introWhiteBackground.style.height = '0';

              setTimeout(() => {
                section3Title.style.display = 'none';
                galleryContainer.style.display = 'block';
                setTimeout(()=>{
                  header.style.opacity = '1';
                  galleryContainer.style.opacity = '1';
                }, 100)
              }, 100)
            },400)
          },1000)
        },1000)
      }, 300)
    }, 1000);
  },100);
};