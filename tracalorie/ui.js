class Ui {
    constructor() {
        this.meals = [];
    }

    addMeal() {
        const meal = document.getElementById('meal').value;
        const caliores = document.getElementById('caliores').value;
        this.meals.push({meal: meal, caliores: caliores, id: this.meals.length});
        const liElement = document.createElement('li');
        const icon = document.createElement('i');
        icon.classList = 'fas fa-pen secondary-content';
        liElement.textContent = `${meal}: ${caliores} caliores`;
        liElement.appendChild(icon);
        liElement.id = this.meals.length - 1;
        liElement.className = 'collection-item';
        document.getElementById('meal-items').appendChild(liElement);
    }

    changeMeal(mealId) {
        const matchingMealObj = this.meals.filter(mealObj => mealObj.id === parseInt(mealId))[0];
        matchingMealObj.meal = document.getElementById('meal').value;
        matchingMealObj.caliores = document.getElementById('caliores').value;
        const icon = document.createElement('i');
        icon.classList = 'fas fa-pen secondary-content';
        document.getElementById(matchingMealObj.id).textContent = `${matchingMealObj.meal}: ${matchingMealObj.caliores} caliores`;
        document.getElementById(matchingMealObj.id).appendChild(icon);
        this.backToNormal();
    }

    deleteMeal(mealId) {
        const matchingMealObj = this.meals.filter(mealObj => mealObj.id === parseInt(mealId))[0];
        this.meals = this.meals.filter(mealObj => mealObj !== matchingMealObj);
        document.getElementById(matchingMealObj.id).remove();
        this.backToNormal();
    }

    deleteAll() {
        Array.from(document.getElementById('meal-items').childNodes).forEach(mealLi => mealLi.remove());
        this.meals = [];
    }
    
    calculateCaliores() {
        const caliores = [];
        this.meals.forEach(ele => caliores.push(ele.caliores));
        if (caliores.length === 0) {
            return 0;
        }

        return caliores.reduce((sum, currentValue) => parseInt(sum) + parseInt(currentValue));
    }
    
    backToNormal() {
        document.getElementById("change-meal").style.display = "none";
        document.getElementById("delete-meal").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("add-meal").style.display = "inline-block";
        document.getElementById('meal').value = '';
        document.getElementById('caliores').value = '';
    }
}