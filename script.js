let currentIndex = 0;
const persons = document.querySelectorAll('.carousel .person');
const totalPersons = persons.length;
const visiblePersons = 3;

// Carrossel
function moveCarousel(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalPersons - visiblePersons; 
  } else if (currentIndex >= totalPersons - visiblePersons + 1) {
    currentIndex = 0;
  }

  const newTransform = `translateX(-${(currentIndex * 100) / visiblePersons}%)`;
  document.querySelector('.carousel').style.transform = newTransform;
}

//Animação Entrada Sobre
document.addEventListener('DOMContentLoaded', () => {
  const animationElements = document.querySelectorAll('.sobre');

  const onScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    animationElements.forEach(element => {
      const positionTop = element.getBoundingClientRect().top + scrollTop;

      if (positionTop < windowHeight + scrollTop) {
        element.classList.add('slide-in-left');
      }
    });
  };
   window.addEventListener('scroll', onScroll);
});

//Animação entrada Carrossel
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); 
        observer.unobserve(entry.target); 
      }
    });
  });

  observer.observe(carouselContainer); 
});

//Animação Entrada Missão, Visão e Valores
document.addEventListener('DOMContentLoaded', () => {
  const animationElements = document.querySelectorAll('.conteudo h1, .conteudo p, .conteudo img, .title_depoimentos h3, .depoimentos .bloco, .depoimentos .bloco p, .depoimentos .bloco h2, .depoimentos .foto');

  const onScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    animationElements.forEach(element => {
      const positionTop = element.getBoundingClientRect().top + scrollTop;

      if (positionTop < windowHeight + scrollTop) {
        element.classList.add('show-on-scroll');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
});



//ARRUMAR SEMANTICA: SHIFT + ALT + F