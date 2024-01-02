function toggleCode() {
  const windowWidth = window.innerWidth;

  const toggleData = [
    { className: '.toggle-code-1', trClass: '.tr1', tdClass: '.td1', height: '600px', isOpen: false },
    { className: '.toggle-code-2', trClass: '.tr2', tdClass: '.td2', height: '1700px', isOpen: false },
    { className: '.toggle-code-3', trClass: '.tr3', tdClass: '.td3', height: '1300px', isOpen: false }
  ];

  toggleData.forEach(data => {
    const togglecode = document.querySelector(data.className);
    const tr = document.querySelector(data.trClass);
    const td = document.querySelector(data.tdClass);

    togglecode.addEventListener('click', function () {
      if (!data.isOpen) {
        togglecode.style.width = '100%';
        togglecode.style.height = data.height;
        tr.style.display = 'none';
        td.style.display = 'inline-block';
        data.isOpen = true;
      } else {
        togglecode.style.width = '154px';
        togglecode.style.height = '44px';
        tr.style.display = 'inline-block';
        td.style.display = 'none';
        data.isOpen = false;
      }
    });
  });
}

window.addEventListener('resize', toggleCode);
toggleCode();
