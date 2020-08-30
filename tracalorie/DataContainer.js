class DataContainer {
    constructor() {
        this.meals = [];
        this.id = 0;
    }

    addMeal(meal) {
        meal.setId(this.id++);
        this.meals.push(meal);
    }

    deleteMealById(mealId) {
        this.meals = this.meals.filter(currentMeal => currentMeal.id !== mealId);
    }

    findMealById(mealId) {
        return this.meals.find(currentMeal => currentMeal.id === mealId);
    }

    deleteAll() {
        this.meals = [];
    }

    getCaloriesArray() {
        const calories = [];
        this.meals.forEach(meal => calories.push(meal.calories));
        if (calories.length === 0) {
            return 0;
        }
        return calories;
    }

    getAll() {
        return this.meals;
    }
}