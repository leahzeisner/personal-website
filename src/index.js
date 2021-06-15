// DOM Elements
const welcomePage = document.getElementById('welcome')
const aboutPage = document.getElementById('about')
const contactPage = document.getElementById('contact')
const workPage = document.getElementById('work')
const starsByID = document.getElementById('stars-container')
const slideshowEl = document.getElementById('slideshow')
const slidesElement = document.getElementsByClassName("my-slides")
const starsContainer = document.querySelector(".stars-container")
const loader = document.getElementById('loader')


let imagesLoaded = 0

const pictures = [
  { link: "https://hangmann-gamee.netlify.app", name: "hangman-pic.png" },
  { link: "https://github.com/leahzeisner/Sudoku", name: "sudoku-pic-1.png" },
  { link: "https://github.com/leahzeisner/Sudoku", name: "sudoku-pic-2.png" },
  { link: "https://my-indecision-app.netlify.app/", name: "indecision-pic-1.png" },
  { link: "https://my-indecision-app.netlify.app/", name: "indecision-pic-2.png"},
  { link: "https://react-udemycourse2-expensify.herokuapp.com/", name: "expensify-pic-1.png" },
  { link: "https://react-udemycourse2-expensify.herokuapp.com/", name: "expensify-pic-2.png" },
  { link: "https://zeisner-weather-app.herokuapp.com/", name: "weather-app-pic.png" },
  { link: "https://zeisner-chat-app.herokuapp.com/", name: "chat-app-pic-1.png" },
  { link: "https://zeisner-chat-app.herokuapp.com/", name : "chat-app-pic-2.png" },
  { link: "https://recipe-shoppinglist-app.web.app/", name : "recipe-sl-app-pic-1.png" },
  { link: "https://recipe-shoppinglist-app.web.app/", name: "recipe-sl-app-pic-2.png" },
  { link: "https://github.com/leahzeisner/django-meetups-app", name: "meetups-pic-1.png" },
  { link: "https://github.com/leahzeisner/django-meetups-app", name: "meetups-pic-2.png" },
  { link: "http://djangoblog-env.eba-jejnkqaj.us-east-2.elasticbeanstalk.com/", name: "blog-app-pic-1.png" },
  { link: "http://djangoblog-env.eba-jejnkqaj.us-east-2.elasticbeanstalk.com/", name: "blog-app-pic-2.png" },
  { link: "http://djangoblog-env.eba-jejnkqaj.us-east-2.elasticbeanstalk.com/", name: "blog-app-pic-3.png" },
  { link: "https://github.com/leahzeisner/quote-generator", name: "quote-generator-pic.png" },
  { link: "https://github.com/leahzeisner/infinte-scroll", name: "infinite-scroll-pic.png" },
  { link: "https://github.com/leahzeisner/joke-teller", name: "joke-teller-pic.png" },
  { link: "https://github.com/leahzeisner/light-dark-mode", name: "light-dark-pic-light.png" },
  { link: "https://github.com/leahzeisner/light-dark-mode", name: "light-dark-pic-dark.png" },
  { link: "https://github.com/leahzeisner/music-player", name: "music-player-pic.png" },
  { link: "https://github.com/leahzeisner/custom-countdown", name: "countdown-pic-1.png" },
  { link: "https://github.com/leahzeisner/custom-countdown", name: "countdown-pic-2.png" },
  { link: "https://github.com/leahzeisner/spock-rock-game", name: "spock-rock-game-pic.png" },
  { link: "https://github.com/leahzeisner/drag-n-drop", name: "kanban-board-pic.png" },
  { link: "https://github.com/leahzeisner/calculator-app", name: "calculator-pic.png" },
  { link: "https://github.com/leahzeisner/microsoft-paint-clone", name: "paint-clone.png" },
  { link: "https://github.com/leahzeisner/pong-game", name: "pong-game-pic.png" }
]



// Hide everything on the page except the loading svg
function togglePageDisplay(makeHidden) {
  welcomePage.style.display = makeHidden ? 'none' : 'flex'
  aboutPage.style.display = makeHidden ? 'none' : 'flex'
  workPage.style.display = makeHidden ? 'none' : 'flex'
  contactPage.style.display = makeHidden ? 'none' : 'flex'
  starsByID.style.display = makeHidden ? 'none' : 'block'

  loader.style.display = makeHidden ? 'flex' : 'none'
}



// Check if all images have been loaded
function checkImagesLoaded() {
  if (imagesLoaded === pictures.length) {
    togglePageDisplay(false)
  }
}



// Create slideshow pictures
function createImages() {
  // Hide Page while images load
  togglePageDisplay(true)

  // Load images
  pictures.forEach((picture) => {
    const link = document.createElement('a')
    link.href = picture.link

    const image = document.createElement('img')
    image.classList.add('my-slides')
    image.src = `./images/${picture.name}`

    link.appendChild(image)
    slideshowEl.appendChild(link)

    imagesLoaded++
    checkImagesLoaded()
  })
}
createImages()







// Automatic Slideshow - change image every 3 seconds
let myIndex = 0;

function slideshow() {
    let i;
    for (i = 0; i < slidesElement.length; i++) {
        slidesElement[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > slidesElement.length) {
        myIndex = 1
    }
    slidesElement[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 3000);
}
slideshow();




                        




// Make welcome page fade away
// Make stars appear after welcome page is scrolled
const welcomeCheckpoint = 500;
const starsCheckpoint = 100;   // change back to 500 if you don't want them to show on welcome page
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let welcomeOpacity

  if (currentScroll <= welcomeCheckpoint) {
    welcomeOpacity = 1 - currentScroll / welcomeCheckpoint;
  } else {
    welcomeOpacity = 0;
  }
  document.querySelector(".welcome-page-left").style.opacity = welcomeOpacity;
  document.querySelector(".welcome-page-right").style.opacity = welcomeOpacity;


  let starsOpacity = 0
  if (currentScroll >= starsCheckpoint) {   
    starsOpacity = 0.3
  } else {
    starsOpacity = 1   // change back to 0 if you don't want them to show on welcome page
  }
  starsContainer.style.opacity = starsOpacity;

});



