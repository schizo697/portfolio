document.querySelectorAll('.project-img').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.getElementById('zoomModal');
        const zoomedImg = document.getElementById('zoomedImg');
        const mainHeader = document.getElementById('main-header');
        
        zoomedImg.src = this.src; // Set the modal image to be the clicked image
        modal.style.display = 'flex'; // Show the modal
        mainHeader.style.display = 'none'; // Hide the header
    });
});

// Add event listener to close the modal and show the header again
document.getElementById('zoomModal').addEventListener('click', function() {
    const mainHeader = document.getElementById('main-header');
    this.style.display = 'none'; // Hide the modal
    mainHeader.style.display = 'flex'; // Show the header
});

// Close the modal when clicked
document.getElementById('zoomModal').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the modal when clicked
});
// JavaScript to ensure the header stays fixed and has small width just for the icons
window.addEventListener('load', () => {
    const header = document.getElementById('floating-header');
    const navLinks = header.querySelector('nav');
    const iconLinks = header.querySelectorAll('.flex a');

    // Adjust width to fit only icons and the nav links
    const totalWidth = Array.from(iconLinks).reduce((acc, link) => acc + link.offsetWidth, 0) + navLinks.offsetWidth + 40; // Extra padding
    header.style.width = totalWidth + 'px';
});
//scroll
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
//icon hover
document.querySelectorAll('.scroll-link i').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.25)';
        icon.style.transition = 'transform 0.3s ease';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

//hide header
const header = document.getElementById('main-header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
            
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
            
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
});