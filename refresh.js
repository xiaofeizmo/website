// Array of image URLs
const images = [
  "./images/collaborations1.jpg",
  "./images/collaborations2.jpg",
  "./images/collaborations3.jpg",
  "./images/collaborations4.jpg",
  "./images/collaborations5.jpg",
  "./images/collaborations7.jpg",
  "./images/collaborations8.jpg",
  "./images/memories1.jpg",
  "./images/memories2.jpg",
  "./images/memories3.jpg",
  "./images/memories4.jpg",
  "./images/memories5.jpg",
  "./images/memories6.jpg",
  "./images/memories7.jpg",
  "./images/work1.jpg",
  "./images/work2.jpg",
  "./images/work3.jpg",
  "./images/work4.jpg",
  "./images/work5.jpg",
  "./images/work6.jpg",
  "./images/work7.jpg",
];

// Get a random image URL from the array
const randomImage = images[Math.floor(Math.random() * images.length)];

// Populate the div with the random image
const imageContainer = document.getElementById("inner_container");
imageContainer.innerHTML = `<img src="${randomImage}" alt="Random Image">`;