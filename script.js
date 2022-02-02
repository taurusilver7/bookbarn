// search form in smaller screens
searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

// Login form.
let loginForm = document.querySelector(".login-form-container");
// login button function
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

// logout button function
document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

// swiper script

var swiper = new Swiper(".books-slider", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
