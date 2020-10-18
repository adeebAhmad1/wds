var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay:{
    speed: 3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

document.querySelectorAll('.btn_close').forEach(el=>el.addEventListener("click",()=> document.body.classList.toggle("over_hide")));