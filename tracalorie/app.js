const uiController = new UIController(document);
const dataContainer = new DataContainer();
let editMealId;

uiController.setAddMealState();
uiController.showMeals(dataContainer.getAll());

uiController.addMealBtn.addEventListener('click', () => {
    const meal = uiController.createMeal();
    uiController.clearInput();
    dataContainer.addMeal(meal);
    uiController.showMeals(dataContainer.getAll());
});

uiController.mealList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('fas')) {
        return;
    }
    uiController.setEditMealState();
    editMealId = parseInt(e.target.parentElement.id);
    const meal = dataContainer.findMealById(editMealId);
    uiController.fillInput(meal);
});

uiController.changeMealBtn.addEventListener('click', () => {
    uiController.setAddMealState();
    dataContainer.updateMeal(editMealId, uiController.createMeal());
    uiController.showMeals(dataContainer.getAll());
    uiController.clearInput();
});

uiController.deleteMealBtn.addEventListener('click', () => {
    dataContainer.deleteMealById(editMealId);
    uiController.showMeals(dataContainer.getAll());
    uiController.setAddMealState();
    uiController.clearInput();
});

uiController.backBtn.addEventListener('click', () => {
    uiController.clearInput();
    uiController.setAddMealState();
});

uiController.clearAllBtn.addEventListener('click', () => {
    dataContainer.deleteAll();
    uiController.showMeals(dataContainer.getAll());
});