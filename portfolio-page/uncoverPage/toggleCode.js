// toggleCode.js

function toggleCode(data, windowWidth) {
  const togglecode = document.querySelector(data.className);
  const toggleBtn = document.querySelector(data.classBtnName);
  const tr = document.querySelector(data.trClass);
  const td = document.querySelector(data.tdClass);

  toggleBtn.addEventListener('click', function () {
    console.log("ss");
    const widths = [1200, 992, 768, 576];
    const dimensions = [
      { width: '154px', height: '44px' },
      { width: '150px', height: '42px' },
      { width: '144px', height: '40px' },
      { width: '140px', height: '40px' },
      { width: '126px', height: '40px' }
    ];
  
    if (!data.isOpen) {
      togglecode.style.width = '95%';
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
}

export { toggleCode };
