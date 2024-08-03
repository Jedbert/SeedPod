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

//Date

function updateCurrentDate() {
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const readTime = '7 min read';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
  <path d="M0 2.7666V2.40625C0 1.90234 0.158203 1.48633 0.474609 1.1582C0.796875 0.830078 1.2334 0.666016 1.78418 0.666016C2.34082 0.666016 2.78027 0.830078 3.10254 1.1582C3.4248 1.48633 3.58594 1.90234 3.58594 2.40625V2.7666C3.58594 3.26465 3.4248 3.67773 3.10254 4.00586C2.78613 4.32812 2.34961 4.48926 1.79297 4.48926C1.24219 4.48926 0.805664 4.32812 0.483398 4.00586C0.161133 3.67773 0 3.26465 0 2.7666Z" fill="black"/>
</svg>`;

    const elements = document.getElementsByClassName('date-output');
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = `${month} ${day}, ${year}  ${svg} ${readTime}`;
    }
  }

  updateCurrentDate();
  setInterval(updateCurrentDate, 1000);

   // Function to open a URL in a new tab/window
        function openInNewTab(url) {
            const newTab = window.open(url, '_blank', 'noopener,noreferrer');
            if (newTab) newTab.opener = null; // Ensure security
        }

        document.getElementById('btn').addEventListener('click', function () {
            openInNewTab('https://jedbert.github.io/works');
        });

        document.getElementById('clickable-card1').addEventListener('click', function () {
            openInNewTab('https://jedbert.github.io/');
        });

        document.getElementById('clickable-card2').addEventListener('click', function () {
            openInNewTab('https://github.com/Jedbert/');
        });

        document.getElementById('clickable-card3').addEventListener('click', function () {
            openInNewTab('https://www.linkedin.com/in/jed-a-o/');
        });