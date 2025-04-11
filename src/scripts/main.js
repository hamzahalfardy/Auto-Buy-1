class Cars {
  constructor({ image, model, infor, order}) {
    this.image = image;
    this.model = model;
    this.infor = infor;
    this.order = order;
  }
}

const cars = [
  new Cars({
    image: 'image4.webp',
    model: 'GMC Terrain',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front- or all-wheel drive.',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image1.webp',
    model: 'Kia Cadenza',
    infor: '2016 Kia Cadenza looks and feels more expensive than you’d expect with its price and Kia badge, and it scored exceedingly well (second place in its class) in J.D. Power’s dependability ranks for the year It won a Top Safety Pick award in its debut year . . .',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image2.webp',
    model: 'Ford F-150',
    infor: 'prices for Ford’s F-150 Lightning have stabilized for 2025. Pricing for the 2025 model increases just $100 from 2024 for each trim level, starting with the XLT at $65,190 (all prices include a $2,195 destination charge, where the $100 cost increase occurs)',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image3.webp',
    model: 'GMC Terrain',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front ...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image5.png',
    model: 'GMC Terrain',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image6.webp',
    model: 'Nissan Versa',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image7.webp',
    model: 'Mazda-3-2015',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image8.webp',
    model: 'Toyota Corola',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image9.webp',
    model: 'nissan-versa',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image10.webp',
    model: '2026 Tesla',
    infor: 'For model-year 2014-16, GMC’s compact SUV was available with two engines: a standard 2.4-liter four-cylinder engine good for 182 hp and an optional 3.6-liter V-6 engine with 301 hp. Both engines were paired with a six-speed automatic transmission and front...',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image11.webp',
    model: '2026 Tesla',
    infor: 'We owned a 2021 Tesla Model Y for 2.5 years as a long-term test car, reporting on efficiency, range, battery degradation, and what it was like living with the electric SUV and using it in our daily routines. The redesigned 2026 Model Y (nicknamed Model Y Juniper) is on sale now . . .',
    order: 'Buy now',
    
  }),

  new Cars({
    image: 'image12.webp',
    model: '2026 Tesla',
    infor: 'We owned a 2021 Tesla Model Y for 2.5 years as a long-term test car, reporting on efficiency, range, battery degradation, and what it was like living with the electric SUV and using it in our daily routines. The redesigned 2026 Model Y (nicknamed Model Y Juniper) is on sale now . . .',
    order: 'Buy now',
  })
]

let carHTML = ''

cars.forEach(car => {
  carHTML += `
  <div class="swiper-slide">
    <img src="images/cars/${car.image}" alt="Car" class="car-image">
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

const swiperWrapper = document.querySelector('.swiper-wrapper');
swiperWrapper.innerHTML = carHTML;


// Swiper Section

const container = document.querySelector('.swiper');
const likeBtns = document.querySelectorAll('.like-btn');

var swiper = new Swiper(".swiper1", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 12000,
  freeMode:true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
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

// Testimonial Data
class Testimonial {
  constructor({ content, image, name, infor }) {
    this.content = content;
    this.image = image;
    this.name = name;
    this.infor = infor;
  }
}

const testimonials = [
  new Testimonial({
    content: `"I've been using this website for a while now, and I'm amazed by the quality of service. The car valuation tool provided accurate estimates, and I found the perfect insur..."`,
    image: 'test1.png',
    name: 'John Doe',
    infor: 'Car Owner'
  }),
  new Testimonial({
    content: `"The car valuation tool is a game-changer! It helped me get a fair price for my car when I was selling it. Plus, the insurance quote feature saved me a lot of time and effort..."`,
    image: 'test2.png',
    name: 'Sarah M.',
    infor: 'Happy Customer'
  }),
  new Testimonial({
    content: `"I can't thank this website enough for the seamless experience. The car insurance quotes were spot on, and the valuation tool gave me confidence in my car's worth...`,
    image: 'test3.png',
    name: 'Michael John',
    infor: 'Car Enthusiast'
  }),
  new Testimonial({
    content: `"I’ve owned many cars, but none have matched the comfort and efficiency of this one. The interior feels premium, and the ride is incredibly smooth even on rough roads."`,
    image: 'added1.png',
    name: 'James Smith',
    infor: 'Happy Customer'
  }),
  new Testimonial({
    content: `"This car strikes the perfect balance between luxury and practicality. It looks great, drives even better, and fits my family comfortably on long trips."`,
    image: 'added2.png',
    name: 'James T',
    infor: 'Happy Customer'
  }),
  new Testimonial({
    content: `"From the moment I stepped into the showroom, the experience was amazing. The team helped me choose the perfect model for my lifestyle and budget."`,
    image: 'added3.png',
    name: 'Aminat Suaib',
    infor: 'Car Enthusiast'
  }),
  new Testimonial({
    content: `"I wasn’t even planning to buy a car that day, but one test drive changed everything. The handling is so smooth and responsive!. The car insurance quotes were spot on"`,
    image: 'added4.png',
    name: 'Daniel R',
    infor: 'Car Enthusiast'
  }),
];

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
          <img src="images/testimony/${testimonial.image}" alt="Name">
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
  watchOverflow: true, // ✅ Prevent slider overflow
  centeredSlidesBounds: true, // ✅ Prevent last slide being pushed off screen

  pagination: {
    el: '.testimonial-pagination', // ✅ Unique selector
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
