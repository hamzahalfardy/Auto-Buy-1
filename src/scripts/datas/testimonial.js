export class Testimonial {
  constructor({ content, image, name, infor }) {
    this.content = content;
    this.image = image;
    this.name = name;
    this.infor = infor;
  }
}

export const testimonials = [
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
