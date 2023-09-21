document.addEventListener("DOMContentLoaded", function () {
    const flowerCenter = document.getElementById("flower-center");
    const hearts = flowerCenter.querySelectorAll(".heart");
  
    flowerCenter.addEventListener("click", function () {
      // Oculta el centro de la flor
      this.style.display = "none";
  
      // Muestra y anima los corazones
      hearts.forEach((heart, index) => {
        setTimeout(() => {
          heart.style.display = "block";
          heart.style.animationDelay = `${index * 0.1}s`; // Retraso para animación escalonada
        }, index * 100); // Retraso para mostrar escalonadamente
      });
  
      // Reinicia la flor después de un tiempo
      setTimeout(() => {
        this.style.display = "block";
        hearts.forEach((heart) => {
          heart.style.display = "none";
        });
      }, hearts.length * 100 + 500); // Ajusta el tiempo según la cantidad de corazones
    });
  });
  