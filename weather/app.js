const saveChangesBtn = document.getElementById('save-changes');
const storage = new Storage();
const city = storage.getFromStorage().city;
const state = storage.getFromStorage().state;
const weather = new Weather(city, state);

function getWeather() {
    weather.getWeather().then(res => {
        const ui = new Ui(document);
        ui.showWeather(res);
    });
}

function saveChanges() {
    $('#change-location').modal('hide');
    const newCity = document.getElementById('city').value;
    const newState = document.getElementById('state').value;
    storage.setLocalStorage(newCity, newState);
    weather.changeLocation(newCity, newState);
    getWeather();
    Ui.clearModal();
}

getWeather();
saveChangesBtn.addEventListener('click', saveChanges);