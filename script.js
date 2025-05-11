

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px'
});


const animateElements = document.querySelectorAll(
  '.about-cont, .qualifications-cont, .img, .practice-cont, ' +
  '.vision-container, .contact-container, .section-title, .q-img'
);

animateElements.forEach(element => {
  element.classList.add('animate-on-scroll');
  observer.observe(element);
});


document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3s ease';
  });
  
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});
