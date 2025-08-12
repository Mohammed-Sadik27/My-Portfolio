// Animate the text : A Data Enginner student 
const text = "A Data Engineer student";
const element = document.querySelector(".job");

let index = 0;
let isDeleting = false;

function animateText() {
  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  element.textContent = text.substring(0, index);

  if (!isDeleting && index === text.length) {
    setTimeout(() => {
      isDeleting = true;
      animateText();
    }, 1500);
    return;
  }

  if (isDeleting && index === 0) {
    isDeleting = false;
  }

  setTimeout(animateText, isDeleting ? 50 : 100); 
}
animateText();
//End Animate the text : A Data Enginner student 

// get the menu toggle:
const menuToggle = document.querySelector('.menu-toggle');
const menuToggle_img=document.querySelector(".menu-toggle img");
const links = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('show'); // add or remove the list show 
});

