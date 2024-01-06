function toggleCode() {
  const windowWidth = window.innerWidth;

  const toggleData = [
    { className: '.toggle-code-1', classBtnName: '.tcb1', trClass: '.tr1', tdClass: '.td1', height: '600px', isOpen: false },
    { className: '.toggle-code-2', classBtnName: '.tcb2', trClass: '.tr2', tdClass: '.td2', height: '1700px', isOpen: false },
    { className: '.toggle-code-3', classBtnName: '.tcb3', trClass: '.tr3', tdClass: '.td3', height: '1300px', isOpen: false }
  ];

  toggleData.forEach(data => {
    const togglecode = document.querySelector(data.className);
    const toggleBtn = document.querySelector(data.classBtnName);
    const tr = document.querySelector(data.trClass);
    const td = document.querySelector(data.tdClass);

    toggleBtn.addEventListener('click', function () {
      const widths = [1200, 992, 768, 576];
      const dimensions = [
        { width: '154px', height: '44px' },
        { width: '150px', height: '42px' },
        { width: '144px', height: '40px' },
        { width: '140px', height: '40px' },
        { width: '126px', height: '40px' }
      ];
    
      if (!data.isOpen) {
        togglecode.style.width = '100%';
        togglecode.style.height = data.height;
        tr.style.display = 'none';
        td.style.display = 'inline-block';
        data.isOpen = true;
      } else {
        for (let i = 0; i < widths.length; i++) {
          if (windowWidth > widths[i]) {
            togglecode.style.width = dimensions[i].width;
            togglecode.style.height = dimensions[i].height;
            tr.style.display = 'inline-block';
            td.style.display = 'none';
            data.isOpen = false;
            break;
          }
        }
      }
    });
  });

  // function getHeightForWidth(index) {
  //   const widths = [1200, 992, 768, 576];

  //   switch (index) {
  //     case 1 :
  //       if (windowWidth > 1200) return '600px';
  //       else if (windowWidth > 992) return '560px';
  //       else if (windowWidth > 768) return '560px';
  //       else if (windowWidth > 576) return '540px';
  //     case 2 :
  //       if (windowWidth > 1200) return '1700px';
  //       else if (windowWidth > 992) return '1700px';
  //       else if (windowWidth > 768) return '1700px';
  //       else if (windowWidth > 576) return 'auto';
  //     case 3 :
  //       if (windowWidth > 1200) return '1300px';
  //       else if (windowWidth > 992) return '1300px';
  //       else if (windowWidth > 768) return '1300px';
  //       else if (windowWidth > 576) return '1300px';
  //   }
  // }
}

window.addEventListener('resize', toggleCode);
toggleCode();
