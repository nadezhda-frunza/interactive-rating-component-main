const container = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const buttonRating = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  if (rating.innerHTML === "") {
    return;
  }

  thankYouContainer.classList.remove("hidden");
  container.style.display = "none";
});

buttonRating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
