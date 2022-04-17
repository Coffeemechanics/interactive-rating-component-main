let submit = document.getElementById("submit");
const buttons = document.querySelectorAll(".rating");
const front_card = document.querySelector(".star-text");
const back_card = document.querySelector(".back-card");
const score = document.querySelector(".score");
let rating_score = 1;

submit.addEventListener("click", clickSubmit);

buttons.forEach((btn) => {
  btn.addEventListener("click", clickButton);
});

function clickSubmit() {
  front_card.classList.add("hide");
  score.textContent = " " + rating_score + " ";
  back_card.classList.remove("hide");

  //if clickButton hasn't been selected, make submit button unclickable.
}

function clickButton(event) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  rating_score = event.target.textContent;
}
