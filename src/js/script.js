// preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main");

  preloader.style.display = "none"; // Hide preloader
  mainContent.style.display = "block"; // Show main content
});

//animation
 const image = document.getElementById('image');

        function handleMouseMove(e) {
            const rect = image.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Get mouse position
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate the angle from the center of the image to the mouse position
            const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

            // Calculate scale based on angle
            const scale = Math.abs(Math.sin(angle * Math.PI / 180)) * 0.3 + 1;

            // Apply the transformation
            image.style.transform = `scale(${scale})`;
        }

        function handleMouseEnter() {
            document.addEventListener('mousemove', handleMouseMove);
        }

        function handleMouseLeave() {
            document.removeEventListener('mousemove', handleMouseMove);
            // Reset the scale when the mouse leaves
            image.style.transform = 'scale(1)';
        }

        // Add event listeners
        image.addEventListener('mouseenter', handleMouseEnter);
        image.addEventListener('mouseleave', handleMouseLeave);

//Slides
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('mouseover', () => {
  const cards = cardContainer.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.animationPlayState = 'paused';
  });
});

cardContainer.addEventListener('mouseout', () => {
  const cards = cardContainer.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.animationPlayState = 'running';
  });
});