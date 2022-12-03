const card = document.querySelector(".inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});