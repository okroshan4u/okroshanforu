// ****************************************
// Creating a portfolio tabbed component
// ****************************************

document.addEventListener("DOMContentLoaded", function() {
  const p_btns = document.querySelector(".p-btns");
  const p_btn = document.querySelectorAll(".p-btn");
  const p_img_elem = document.querySelectorAll(".img-overlay");

  if (p_btns) {
    p_btns.addEventListener("click", (e) => {
      const p_btn_clicked = e.target;
      console.log(p_btn_clicked);

      p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
      p_btn_clicked.classList.add("p-btn-active");

      // to find the number attribute
      const btn_num = p_btn_clicked.dataset.btnNum;
      console.log(btn_num);

      const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

      p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

      img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
    });
  } else {
    console.error("Element with class 'p-btns' not found in the DOM.");
  }
});


// const p_btns = document.querySelector(".p-btns");
// const p_btn = document.querySelectorAll(".p-btn");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target;
//   console.log(p_btn_clicked);

//   p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
//   p_btn_clicked.classList.add("p-btn-active");

//   // to find the number attribute
//   const btn_num = p_btn_clicked.dataset.btnNum;
//   console.log(btn_num);

//   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

//   p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

//   img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
// });

// *************************************
// swiper js code
// *************************************
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
});


// scroll to top functinallity
// const heroSection = document.querySelector(".section-hero");
const heroSection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrolltop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" })
};
scrollElement.addEventListener("click", scrollTop);


// Animated number section

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 150;
counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const increamentNum = Math.trunc(targetNumber / speed);
    // console.log(increamentNum);
    if (initialNum < targetNumber) {
      curElem.innerText = initialNum + increamentNum + "+";

      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});



// ************************************* 
// responsive navbar section
// *************************************
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  heroSection.classList.toggle("active");
})

// ***************************************
// implimenting mediaqueries using js
// ***************************************



const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
    });
  }
}
const widthSize = window.matchMedia("(max-width: 990px)");

// call listener function at run time
myJsmedia(widthSize);

// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);


const myJsmedia1 = (widthSize1) => {
  if (widthSize1.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
    });
  }
}
const widthSize1 = window.matchMedia("(max-width: 780px)");

// call listener function at run time
myJsmedia1(widthSize1);

// Attach listener function on state changes
widthSize1.addEventListener("change", myJsmedia1);

// *********dark theme ***********************

// const toggle = document.getElementById('icon');
// toggle.addEventListener('click', function(){
//   this.classList.toggle('fa-moon');
//   document.body.classList.toggle('dark-theme');
// })

// getTheme();
const toggle = document.getElementById('icon');

// Check if the user has a saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-theme') {
    toggle.classList.add('fa-moon');
  }
}

toggle.addEventListener('click', function() {
  this.classList.toggle('fa-moon');
  document.body.classList.toggle('dark-theme');

  // Save the current theme preference to localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
});


// ***********************schatter logo animation *****************

const enhance = id => {
  const element = document.getElementById(id),
  text = element.innerText.split("");

  element.innerText = "";

  text.forEach(letter =>{
      const span = document.createElement("span");
      span.className = "letter";
      span.innerText = letter;

      element.appendChild(span);
  });
}

enhance("link");