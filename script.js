// Function to create background floating hearts for the question page
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartsContainer.appendChild(heart);
  }
}

// When "Yes" is clicked, redirect to the video page
function sayYes() {
  window.location.href = "video.html";
}

// Function to move the "No" button away when hovered over and update the convincing board.
// The No button now moves anywhere on the screen using fixed positioning.
// It will try up to 10 times to pick a position that doesn't overlap the board. 
// The convincing board displays a new, subtle message that stays visible indefinitely.
function moveNoButton() {
  const noButton = document.getElementById('noButton');
  const board = document.getElementById('convincingBoard');
  const noRect = noButton.getBoundingClientRect();
  let newLeft, newTop;
  const maxAttempts = 10;
  let attempt = 0;
  
  while (attempt < maxAttempts) {
    newLeft = Math.random() * (window.innerWidth - noRect.width);
    newTop = Math.random() * (window.innerHeight - noRect.height);
    const boardRect = board.getBoundingClientRect();
    
    if (
      newLeft < boardRect.right &&
      (newLeft + noRect.width) > boardRect.left &&
      newTop < boardRect.bottom &&
      (newTop + noRect.height) > boardRect.top
    ) {
      attempt++;
      continue;
    } else {
      break;
    }
  }
  
  noButton.style.position = 'fixed';
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
  
  // Updated convincing messages – more subtle and not too pushy.
  const convincingMessages = [
    "I really hope you'll say yes!",
    "I'd love to spend time with you.",
    "You make me smile.",
    "Let's have a great time together!",
    "You brighten my day!",
    "You mean a lot to me!",
    "Can't wait to see you!",
    "I truly care about you!"
  ];
  const randomMsg = convincingMessages[Math.floor(Math.random() * convincingMessages.length)];
  board.innerText = randomMsg;
  board.style.opacity = '1';
}

// Attach the hover event to the "No" button and create background hearts when the DOM is ready.
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('noButton').addEventListener('mouseover', moveNoButton);
  createHearts();
});
