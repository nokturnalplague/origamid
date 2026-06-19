const active = 'ativo';

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(active);

    function activeTab(i) {
      tabContent.forEach((section) => {
        section.classList.remove(active);
      });
      tabContent[i].classList.add(active);
    }

    tabMenu.forEach((item, i) => {
      item.addEventListener('click', () => {
        activeTab(i);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    function activeAccordion(event) {
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  console.log('Scroll suave iniciado!');

  function scrollToSection(event) {
    event.preventDefault();

    console.log('Clique interceptado');

    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    // const sectionTop = section.getBoundingClientRect().top;

    // FORMA ALTERNATIVA
    // window.scrollTo({
    //   top: sectionTop,
    //   behavior: 'smooth',
    // });

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initTabNav();
initAccordion();
initScrollSuave();
