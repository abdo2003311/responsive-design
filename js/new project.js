const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
var userName = document.getElementById('name'),
warning = document.getElementById('warning'),
submit = document.getElementById('submit');
submit.onclick = function (e) {
  if (userName.value.length <= 8) {
    e.preventDefault();
    warning.textContent = "must be 8 charecters and above";
  } else if(userName.value.search(/[0-9]/) === -1) {
    e.preventDefault();
    warning.textContent = "the name must contain nums";
  } else {
    warning.textContent = "";
  }
}
var showMore = document.getElementsByClassName("showMore")[0],
    counter = 0;
showMore.addEventListener("click", function(){
    counter += 1;
    if (document.getElementsByClassName(`items${counter}`).length === 1){
        document.getElementsByClassName(`items${counter}`)[0].style.display = "flex";
    }
})