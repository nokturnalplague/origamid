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

initTabNav();

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

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

function initScrollAnimation() {}
const sections = document.querySelectorAll('.js-scroll');
const window50 = window.innerHeight * 0.5;

if (sections.length) {
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - window50 < 0;
      if (isSectionVisible) {
        section.classList.add(active);
      } else {
        section.classList.remove(active);
      }
    });
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

initScrollAnimation();
