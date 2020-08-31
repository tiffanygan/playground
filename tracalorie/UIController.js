class UIController {
    constructor(document) {
        this.document = document;
        this.mealInput = this.document.getElementById('meal');
        this.calorieInput = this.document.getElementById('calories');
        this.totalCalories = this.document.getElementById('number');
        this.mealList = this.document.getElementById('meal-items');
        this.addMealBtn = this.document.getElementById('add-meal');
        this.changeMealBtn = this.document.getElementById('change-meal');
        this.deleteMealBtn = this.document.getElementById('delete-meal');
        this.backBtn = this.document.getElementById('back');
        this.clearAllBtn = this.document.getElementById('clear-all');
    }

    createMeal() {
        const meal = new MealItem(this.mealInput.value, parseInt(this.calorieInput.value));
        return meal;
    }

    showMeals(meals) {
        this.mealList.innerHTML = '';
        meals.forEach(meal => this.showMeal(meal));
        const calories = meals.reduce((sum, meal) => sum + meal.calories, 0);
        this.totalCalories.textContent = calories;
    }

    showMeal(meal) {
        const liElement = document.createElement('li');
        liElement.className = 'collection-item';
        liElement.textContent = `${meal.name}: ${meal.calories} calories`;
        liElement.id = meal.id;
        const icon = document.createElement('i');
        icon.classList = 'fas fa-pencil-alt secondary-content';
        liElement.appendChild(icon);
        this.mealList.appendChild(liElement);
    }

    fillInput(meal) {
        this.mealInput.value = meal.name;
        this.calorieInput.value = meal.calories;
        this.calorieInput.focus();
        this.mealInput.focus();
    }

    clearInput() {
        this.mealInput.value = '';
        this.calorieInput.value = '';
    }

    setAddMealState() {
        this.addMealBtn.style.display = 'inline-block';
        this.changeMealBtn.style.display = 'none';
        this.deleteMealBtn.style.display = 'none';
        this.backBtn.style.display = 'none';
    }
    
    setEditMealState() {
        this.addMealBtn.style.display = 'none';
        this.changeMealBtn.style.display = 'inline-block';
        this.deleteMealBtn.style.display = 'inline-block';
        this.backBtn.style.display = 'inline-block';
    }
}