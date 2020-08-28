document.getElementById("change-meal").style.display = "none";
document.getElementById("delete-meal").style.display = "none";
document.getElementById("back").style.display = "none";

const ui = new Ui();
let originalMealId;

document.getElementById("add-meal").addEventListener("click", () => {
  ui.addMeal();
  document.getElementById("number").textContent = ui.calculateCaliores();
  ui.backToNormal();
});

document.getElementById("meal-items").addEventListener("click", (e) => {
  if (e.target.classList.contains("fas")) {
    document.getElementById("add-meal").style.display = "none";
    document.getElementById("change-meal").style.display = "inline-block";
    document.getElementById("delete-meal").style.display = "inline-block";
    document.getElementById("back").style.display = "inline-block";
    document.getElementById("meal").value = ui.meals.filter(
      (mealObj) => mealObj.id === parseInt(e.target.parentElement.id)
    )[0].meal;
    document.getElementById("caliores").value = ui.meals.filter(
      (mealObj) => mealObj.id === parseInt(e.target.parentElement.id)
    )[0].caliores;
    originalMealId = e.target.parentElement.id;
    return;
  }
});

document.getElementById("change-meal").addEventListener("click", () => {
  ui.changeMeal(originalMealId);
  document.getElementById("number").textContent = ui.calculateCaliores();
});

document.getElementById("delete-meal").addEventListener("click", () => {
  ui.deleteMeal(originalMealId);
  document.getElementById("number").textContent = ui.calculateCaliores();
});

document.getElementById("back").addEventListener("click", () => {
  ui.backToNormal();
});

document.getElementById("clear-all").addEventListener("click", () => {
  ui.deleteAll();
  document.getElementById("number").textContent = ui.calculateCaliores();
});
