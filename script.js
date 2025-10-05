const carousel = document.querySelector('.carousel');
const btnPrev  = document.getElementById('prevBtn');
const btnNext  = document.getElementById('nextBtn');

function pageWidth(){
  return carousel.getBoundingClientRect().width;
}

btnPrev.addEventListener('click', ()=>{
  carousel.scrollBy({ left: -pageWidth(), behavior: 'smooth' });
});

btnNext.addEventListener('click', ()=>{
  carousel.scrollBy({ left:  pageWidth(), behavior: 'smooth' });
});

// Setas do teclado
window.addEventListener('keydown', (e)=>{
  if (e.key === 'ArrowLeft')  carousel.scrollBy({ left: -pageWidth(), behavior:'smooth' });
  if (e.key === 'ArrowRight') carousel.scrollBy({ left:  pageWidth(), behavior:'smooth' });
});
