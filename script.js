const link1 = document.getElementById("unitM");
const link2 = document.getElementById("unitU");
const section1 = document.getElementById("metric");
const section2 = document.getElementById("USunit");
const Clear = document.getElementById("clear");
const Clear2 = document.getElementById("clear2");

let age = document.getElementById("Age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");

let male = document.getElementById("male");
let female = document.getElementById("female");
let resultComment = document.getElementById("comment");
let bmiresult = document.getElementById("result");
let Calcbtn = document.getElementById("calculate");
let Calcbtn2 = document.getElementById("calculate2");
let heightInches = document.getElementById("heightIn");
let heightfeet = document.getElementById("heightfeet");
let weightpounds = document.getElementById("weightpounds");

function toogleBorder(event) {
  event.preventDefault();
  link1.classList.remove("border-bottom-active");
  link2.classList.remove("border-bottom-active");
  event.target.classList.add("border-bottom-active");
}
link1.addEventListener("click", toogleBorder);
link2.addEventListener("click", toogleBorder);

function ShowSection2(event) {
  event.preventDefault();
  section2.classList.contains("hidden");
  section2.classList.remove("hidden");
  section1.classList.add("hidden");
}
function ShowSection1(event) {
  event.preventDefault();
  section1.classList.contains("hidden");
  section1.classList.remove("hidden");
  section2.classList.add("hidden");
}
link1.addEventListener("click", ShowSection1);
link2.addEventListener("click", ShowSection2);

function CalcBmi1() {
  let bmi = weight.value / ((height.value / 100) * (height.value / 100));

  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi < 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi < 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }

  document.querySelector(".comment").innerHTML = `You are ${result}`;
  document.querySelector(".result").innerHTML = bmi.toFixed(2);
}

Calcbtn.addEventListener("click", CalcBmi1);

function CalcBmi2() {
  let totalheight =
    parseFloat(heightfeet.value) * 12 + parseFloat(heightInches.value);
  let bmi = 703 * (weightpounds.value / Math.pow(totalheight, 2));

  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi < 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi < 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }

  document.querySelector("#comment2").innerHTML = `You are ${result}`;
  document.querySelector("#result2").innerHTML = bmi.toFixed(2);
}

Calcbtn2.addEventListener("click", CalcBmi2);

function clearForm() {
  const inputs = document.querySelectorAll("#form input");
  inputs.forEach((input) => {
    input.value = "";
  });
  document.querySelector(".comment").innerHTML = " ";
  document.querySelector(".result").innerHTML = "0.00";

  document.querySelector("#comment2").innerHTML = " ";
  document.querySelector("#result2").innerHTML = "0.00";
}
Clear.addEventListener("click", clearForm);
Clear2.addEventListener("click", clearForm);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.querySelectorAll("p").forEach((p) => {
          p.classList.add("visible");
        });
      } else {
        entry.target.classList.remove("visible");
        entry.target.querySelectorAll("p").forEach((p) => {
          p.classList.remove("visible");
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
