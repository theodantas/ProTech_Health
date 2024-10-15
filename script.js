let currentIndex = 0;
const persons = document.querySelectorAll('.carousel .person');
const totalPersons = persons.length;
const visiblePersons = 3;

function moveCarousel(direction) {
  currentIndex += direction;

  // Ajuste para o loop circular
  if (currentIndex < 0) {
    currentIndex = totalPersons - visiblePersons; // Volta para o final se clicar "anterior" no início
  } else if (currentIndex >= totalPersons - visiblePersons + 1) {
    currentIndex = 0; // Volta para o início se clicar "próximo" no último grupo
  }

  const newTransform = `translateX(-${(currentIndex * 100) / visiblePersons}%)`;
  document.querySelector('.carousel').style.transform = newTransform;
}


document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe para a animação
                observer.unobserve(entry.target); // Para observar novamente, se necessário
            }
        });
    });

    observer.observe(carouselContainer); // Observa o carousel-container
});