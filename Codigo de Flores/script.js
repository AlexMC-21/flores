onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Función para mostrar las flores con microinteracciones
function showFlowers() {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const flowersScreen = document.getElementById('flowersScreen');
  const button = document.querySelector('.minimal-btn');
  
  // Animación del botón
  button.style.transform = 'scale(0.95)';
  button.style.opacity = '0.7';
  
  setTimeout(() => {
    // Fade out de la pantalla de bienvenida
    welcomeScreen.classList.add('fade-out');
    
    setTimeout(() => {
      // Ocultar bienvenida y mostrar flores
      welcomeScreen.style.display = 'none';
      flowersScreen.style.display = 'block';
      
      // Microinteracción: aparición gradual de flores
      setTimeout(() => {
        flowersScreen.classList.add('show');
        
        // Reiniciar animaciones de flores con delay escalonado
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach((flower, index) => {
          flower.style.opacity = '0';
          flower.style.transform = 'translateY(20px) scale(0.8)';
          
          setTimeout(() => {
            flower.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            flower.style.opacity = '1';
            flower.style.transform = 'translateY(0) scale(1)';
          }, index * 150);
        });
        
        // Animar elementos de pasto con delay
        const grassElements = document.querySelectorAll('.growing-grass, .grow-ans, .long-g');
        grassElements.forEach((element, index) => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(10px)';
          
          setTimeout(() => {
            element.style.transition = 'all 0.5s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, 800 + (index * 50));
        });
      }, 100);
    }, 800);
  }, 200);
}

// Personalizar el nombre (fácil modificación)
function changeName(newName) {
  const nameElement = document.querySelector('.name');
  if (nameElement && newName) {
    nameElement.style.transition = 'all 0.3s ease';
    nameElement.style.transform = 'scale(0.8)';
    nameElement.style.opacity = '0';
    
    setTimeout(() => {
      nameElement.textContent = newName;
      nameElement.style.transform = 'scale(1)';
      nameElement.style.opacity = '1';
    }, 300);
  }
}

// Efecto de hover mejorado para el botón
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.minimal-btn');
  if (button) {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  }
});