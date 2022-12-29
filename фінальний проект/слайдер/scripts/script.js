const nextButton = document.querySelector('.next-button');
const scrollNext = document.getElementById('scroll');
const prevButton = document.querySelector('.previous-button');
const scrollPrev = document.getElementById('start');


nextButton.onclick = function(){
  scrollNext.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
}

prevButton.onclick = function(){
  scrollPrev.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
}