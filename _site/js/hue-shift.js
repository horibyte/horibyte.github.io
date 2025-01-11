// js/hue-shift.js
const image = document.getElementById('hbWordmark'); 
let hue = 0; 
let isHovering = false;

function shiftHue() {
  if (isHovering) {
    hue += 10; // Adjust the hue shift value here
    image.style.filter = `hue-rotate(${hue}deg)`;

    if (hue >= 360) {
      hue = 0; // Reset hue after a full rotation
    }

    requestAnimationFrame(shiftHue); 
  }
}

image.addEventListener('mouseover', () => {
  isHovering = true;
  shiftHue(); 
});

image.addEventListener('mouseout', () => {
  isHovering = false;
});

// For touch devices
image.addEventListener('touchstart', () => {
  isHovering = true;
  shiftHue();
});

image.addEventListener('touchend', () => {
  isHovering = false;
});