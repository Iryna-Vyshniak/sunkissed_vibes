new hoverEffect({
  parent: document.querySelector('.displacement01'),
  intensity: 0.3,
  image1: './images/girl01.jpg',
  image2: './images/man01.jpg',
  displacementImage: './images/displacement.png',
  imagesRatio: 500 / 350,
});

new hoverEffect({
  parent: document.querySelector('.displacement02'),
  intensity: 0.3,
  image1: './images/girl02.png',
  image2: './images/man02.jpg',
  displacementImage: './images/displacement.png',
  imagesRatio: 1 / 1,
});

new hoverEffect({
  parent: document.querySelector('.displacement03'),
  intensity: 0.3,
  image1: './images/girl03.jpg',
  image2: './images/man03.jpg',
  displacementImage: './images/displacement.png',
  imagesRatio: 200 / 360,
});

gsap.to('.bg', {
  duration: 2,
  width: '100%',
  ease: 'expo.inOut',
});

// NAVBAR
gsap.from('.navbar', {
  duration: 2,
  delay: 2.5,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
});

// SOCIAL MEDIA
gsap.from(
  '.media ul li',

  {
    duration: 2,
    delay: 2.8,
    opacity: 0,
    x: -30,
    ease: 'expo.inOut',
    stagger: 0.08,
  }
);

// TEXT
gsap.from('.text h1 .hidetext', {
  duration: 2,
  delay: 1.6,
  y: '100%',
  ease: 'expo.inOut',
});

gsap.from('.text p .hidetext', {
  duration: 2,
  delay: 2,
  y: '100%',
  ease: 'expo.inOut',
});

// DESC
gsap.from('.desc ul li', {
  duration: 2,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.01,
});

gsap.from('.desc p', {
  duration: 2,
  delay: 2.3,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
});

// SCROLLDOWN
gsap.from('.scrolldown', {
  duration: 2,
  delay: 2.7,
  opacity: 0,
  y: 200,
  ease: 'expo.inOut',
});

// BOTTOMNAV
gsap.from('.bottomnav', {
  duration: 2,
  delay: 3.2,
  opacity: 0,
  y: 30,
  ease: 'expo.inOut',
});

gsap.from('.bottomnav .next', {
  duration: 2,
  delay: 3.5,
  opacity: 0,
  x: -20,
  ease: 'expo.inOut',
});

// DISTORTION
gsap.from('.displacement01', {
  duration: 2.5,
  delay: 2,
  opacity: 0,
  y: '100%',
  ease: 'expo.inOut',
});

gsap.from('.displacement02', {
  duration: 2.5,
  delay: 2,
  opacity: 0,
  y: '100%',
  ease: 'expo.inOut',
});
