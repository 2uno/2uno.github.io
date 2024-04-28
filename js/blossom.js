document.addEventListener('DOMContentLoaded', function () {
    const cherryBlossom = document.querySelector('.cherry_blossom');
    const numPetals = Math.floor(Math.random() * 11) + 20; // Random number of petals between 20 and 30
  
    for (let i = 0; i < numPetals; i++) {
      createPetal();
    }
  
    function createPetal() {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      cherryBlossom.appendChild(petal);
  
      const startX = Math.random() * cherryBlossom.offsetWidth;
      const startY = -20;
      const endX = startX - Math.random() * 200 + 100;
      const endY = cherryBlossom.offsetHeight + 20;
      const duration = Math.random() * 4000 + 2000; // Random duration between 2s and 6s
      const size = Math.random() * 20 + 10; // Random size between 10px and 30px
  
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      petal.style.left = startX + 'px';
      petal.style.top = startY + 'px';
      petal.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
  
      petal.animate([
        { transform: `translate(${startX}px, ${startY}px)` },
        { transform: `translate(${endX}px, ${endY}px)` }
      ], {
        duration: duration,
        easing: 'ease-in-out',
        iterations: Infinity,
        delay: Math.random() * 2000 // Random delay between 0s and 2s
      }).onfinish = () => {
        petal.style.left = startX + 'px';
        petal.style.top = startY + 'px';
      };
    }
  });
  