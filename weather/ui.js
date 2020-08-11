class Ui {
    constructor(userDocument) {
        this.location = userDocument.getElementById('location');
        this.forecast = userDocument.getElementById('forecast');
        this.icon = userDocument.getElementById('icon');
        this.humidity = userDocument.getElementById('humidity');
        this.wind = userDocument.getElementById('wind');
        this.clouds = userDocument.getElementById('clouds');
        this.temperature = userDocument.getElementById('temperature');
    }

    showWeather(weatherData) {
        Object.keys(weatherData).forEach(key => {
            if (key === 'icon') {
                this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherData[key]}@2x.png`);
                return;
            }
            this[key].textContent = `${key}: ${weatherData[key]}`;
        })
    }

    static clearModal() {
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
    }
}