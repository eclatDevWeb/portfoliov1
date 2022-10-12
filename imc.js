const resultNumber = document.querySelector(".resultNumber");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

function calculateBMI(y, x) {
  BMI = (y / Math.pow(x / 100, 2)).toFixed(2);

  if (BMI < 18.5) {
    resultNumber.textContent = BMI + " : Maigreur";
    resultNumber.style.color = "blue";
  } else if (BMI < 24.9) {
    resultNumber.textContent = BMI + " : Poids Normal";
    resultNumber.style.color = "green";
  } else if (BMI < 29.9) {
    resultNumber.textContent = BMI + " : Surpoids";
    resultNumber.style.color = "yellow";
  } else if (BMI < 34.9) {
    resultNumber.textContent = BMI + " : Obésité modéré";
    resultNumber.style.color = "orange";
  } else if (BMI < 39.9) {
    resultNumber.textContent = BMI + " : Obésité sévère";
    resultNumber.style.color = "red";
  } else {
    resultNumber.textContent = BMI + " : Obésité Morbide";
    resultNumber.style.color = "black";
  }
  console.log(BMI);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = inputs[0].value;
  let weight = inputs[1].value;
  if (height == "" || weight == "") {
    resultNumber.textContent = "Alors ?! On a peur joli(e) coeur ?";
    resultNumber.style.color = "pink";
  } else if (height < 54.6) {
    resultNumber.textContent = "L' homme, le plus petit du monde mesure 54.6cm";
    resultNumber.style.color = "purple";
  } else if (height > 251) {
    resultNumber.textContent = "L' homme, le plus grand du monde mesure 2,51m";
    resultNumber.style.color = "purple";
  } else {
    console.log(height);
    console.log(weight);
    calculateBMI(weight, height);
  }
});
