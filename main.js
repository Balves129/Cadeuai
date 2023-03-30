const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

// texto animado
const text = document.querySelector(".sec-text");

    const textLoad = () => {
      setTimeout(() => {
          text.textContent = "Facilidade"; //Aqui adiciona um texto dentro do content do Css
      }, 0);
      setTimeout(() => { //setTimeout controla o tempo da animação em milissegundos
          text.textContent = "Conforto";
      }, 4500);
      setTimeout(() => {
          text.textContent = "Precisão";
      }, 8650);
    }
    

    textLoad();
    setInterval(textLoad, 12000);

    //Carrossel 
    // let images = Array.from(document.getElementsByClassName('imgCarousel')) //Aqui fazemos a busca do objeto pela sua classe Html

    // let mainPhoto = document.getElementById("mainPhoto")

    // function updateImage(event){
    //   let image = event.target

    //   mainPhoto.src = image.src
    // }
    // images.forEach(function(image){
    //   image.addEventListener("click",updateImage)
    // });
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        accordionContent.classList.toggle('active');
      });
    });