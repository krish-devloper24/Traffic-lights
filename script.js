const result = document.getElementById("result");
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

redLight.addEventListener("click", () => {
    redLight.classList.add("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");
});

yellowLight.addEventListener("click", () => {
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
    greenLight.classList.remove("active");
});

greenLight.addEventListener("click", () => {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.add("active");
});