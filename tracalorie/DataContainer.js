class DataContainer {
    constructor() {
        const mealsFromLocalStorage = localStorage.getItem('meals');
        this.meals = mealsFromLocalStorage ? JSON.parse(mealsFromLocalStorage) : [];
        this.id = this.meals.reduce((maxId, meal) => Math.max(maxId, meal.id), -1) + 1;
    }

    addMeal(meal) {
        meal.setId(this.id++);
        this.meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(this.getAll()));
    }
    
    deleteMealById(mealId) {
        this.meals = this.meals.filter(currentMeal => currentMeal.id !== mealId);
        localStorage.setItem('meals', JSON.stringify(this.getAll()));
    }
    
    findMealById(mealId) {
        return this.meals.find(currentMeal => currentMeal.id === mealId);
    }
    
    deleteAll() {
        this.meals = [];
        localStorage.setItem('meals', JSON.stringify(this.getAll()));
    }

    getAll() {
        return this.meals;
    }

    updateMeal(mealId, updatedMealItem) {
        const matchingMeal = this.meals.find(currentMeal => currentMeal.id === mealId);
        matchingMeal.name = updatedMealItem.name;
        matchingMeal.calories = updatedMealItem.calories;
        localStorage.setItem('meals', JSON.stringify(this.getAll()));
    }
}