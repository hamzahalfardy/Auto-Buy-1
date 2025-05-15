import { cars } from "./datas/cars.js";
import { testimonials } from "./datas/testimonial.js";
import { handleMakeChange, handleModelChange } from "./datas/searchEgn.js";
import { products } from "./datas/product.js";

// Hamburger Button
const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('backdrop');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
}
  
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // PopUp Message
  setTimeout(() => {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.classList.remove('opacity-0');
    popup.classList.add('opacity-100');
  }, 3000);
  
  // Hide popup on 'Explore' button click
  document.querySelector('.close-popup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('opacity-0');
  
    // Wait for fade-out before hiding
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 500);
  });

    // Searched Car Section

    
    

  

  // the search section
  const carMake = document.querySelector('#car-make');
  const carModel = document.querySelector('#car-model');
  const carYear = document.querySelector('#car-year');
  const carPrice = document.querySelector('#car-price');
  const searchBtn = document.querySelector('#searchBtn');
const displaySearch = document.querySelector('.displayResult');
  const searchedContainer = document.querySelector('.contain-search')
  
  carMake.addEventListener('change', handleMakeChange);
  carModel.addEventListener('change', handleModelChange);
  searchBtn.addEventListener('click', searchProducts);
  
  let searchSwiper = null;

function searchProducts() {
  const make = carMake.value.trim().toLowerCase();
  const model = carModel.value.trim().toLowerCase();
  const year = parseInt(carYear.value.trim());
  const price = carPrice.value.trim();

  const errorMsg = document.getElementById('search-error');

  if (!make || !model || !year || !price) {
    errorMsg.classList.add('fade');
    errorMsg.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: #ff5f3b;"></i> Please select in all fields';
    setTimeout(() => errorMsg.classList.add('fade-out'), 3000);
    searchedContainer.classList.add('none');
    return;
  }

  searchedContainer.classList.remove('none');
  searchedContainer.style.display = 'block';
  displaySearch.innerHTML = '';

  const matched = products.filter(product =>
    product.make.toLowerCase() === make &&
    product.model.toLowerCase() === model &&
    product.year === year &&
    product.price === price
  );

  if (matched.length > 0) {
    const product = matched[0];
    const slides = product.image.map(img => `
      <div class="swiper-slide flex items-center justify-center">
        <img src="${img}" alt="Car Image" class="w-full h-full object-cover rounded-lg">
      </div>
    `).join('');

    displaySearch.innerHTML = `
  <h3 id="search-title" class="text-center text-[clamp(0.8rem,1.8vw,2rem)] text-teal-600 font-extrabold mb-5 mt-5">
    ${product.make} ${product.model}
  </h3>

  <div class="container-three">
    <div class="swiper swiper-search h-[60vh]">
      <div class="swiper-wrapper search-wrapper">
        ${slides}
      </div>
      <div class="swiper-pagination search-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>

  <div class="car-info mt-[2rem] space-y-4">
    <p class="text-teal-900"><strong>Make:</strong> ${product.make}</p>
    <p class="text-teal-900"><strong>Model:</strong> ${product.model}</p>
    <p class="text-teal-900"><strong>Year:</strong> ${product.year}</p>
    <p class="text-teal-900"><strong>Price:</strong> ${product.price}</p>
    <p class="text-teal-900"><strong>Description:</strong> ${product.description || product.discription}</p>
  </div>

  <button class="deleteBtn flex text-red-600 mt-5 ml-auto text-[clamp(0.8rem,1.8vw,2rem)] font-extrabold">Close</button>
`;

    if (searchSwiper) {
      searchSwiper.destroy(true, true);
    }

    searchSwiper = new Swiper(".swiper-search", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".search-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

    document.querySelector('.deleteBtn').addEventListener('click', () => {
      searchedContainer.classList.add('none');
      if (searchSwiper) {
        searchSwiper.destroy(true, true);
      }
    });

  } else {
    displaySearch.innerHTML = `
      <p id="not-found-msg" class="text-red-600 font-bold text-center text-lg mt-4">
        <i class="fa-solid fa-circle-xmark"></i> No matching cars found.
      </p>
    `;
    setTimeout(() => {
      displaySearch.style.transition = 'opacity 0.5s ease';
      displaySearch.style.opacity = '0';
      setTimeout(() => {
        displaySearch.innerHTML = '';
        searchedContainer.style.display = 'none';
        displaySearch.style.opacity = '1';
      }, 500);
    }, 3000);
  }
}      
let carHTML = ''

cars.forEach(car => {
  carHTML += `
  <div class="swiper-slide futured-slide">
    <img src="src/images/cars/${car.image}" alt="Car" class="car-image">
          <h3 class="car-name">${car.model}</h3>
          <p class="abt-car">
          ${car.infor}
          </p>
          <div class="caption">
            <h1>${car.order}</h1>
            <ion-icon name="heart" class="like-btn"></ion-icon>
          </div>
  </div>`        
});


// futured Listing Section
const swiperWrapper = document.querySelector('.futured-wrapper');
swiperWrapper.innerHTML = carHTML;


// Swiper Section

const container = document.querySelector('.futured-swiper');
const likeBtns = document.querySelectorAll('.like-btn');

var swiper = new Swiper(".futured-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true, 
  centeredSlides: false, 
  centeredSlidesBounds: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


function stopAutoPlay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}

function startAutoPlay() {
  swiper.slideTo(swiper.activeIndex, 3000, false);
  swiper.autoplay.start();
}

container.addEventListener("mouseenter", () => {
  console.log("Mouse entered");
  stopAutoPlay();
});
container.addEventListener("mouseleave", () => startAutoPlay());

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
    likeBtn.classList.toggle("pulse");
  });
});

// Inject testimonial slides
const wrapper = document.querySelector('.testimonial-wrapper');
wrapper.innerHTML = testimonials.map(testimonial => `
  <div class="swiper-slide testimonial-slide">
    <div class="testimonial-card">
      <div class="testimonial-text">
        <p>${testimonial.content}</p>
      </div>
      <div class="testimonial-bottom">
        <div class="testimonial-img">
          <img src="src/images/testimony/${testimonial.image}" alt="Name">
        </div>
        <div class="testimonial-info">
          <p>${testimonial.name} <br> ${testimonial.infor}</p>
        </div>
      </div>
    </div>

  </div>
`).join('');

// Initialize Swiper
const testimonialSwiper = new Swiper('.swiper-testimonials', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  spaceBetween: 30,
    watchOverflow: true,
  centeredSlidesBounds: true, 

  pagination: {
    el: '.testimonial-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});
