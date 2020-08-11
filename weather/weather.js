class Weather {
    constructor (city, state) {
        this.city = city;
        this.state = state;
        this.api = '71ebacd2236a16c6764176287fc6f5d1';
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api}`;
    }

    async getWeather() {
        const res = await fetch(this.url);
        const jsonRes = await res.json();
        const kelvinTemp = jsonRes.main.temp;
        const temp = kelvinTemp - 273.15;
        const celsiusTemp = temp.toFixed(2);
        const weatherData = {
            location: `${jsonRes.name}, ${jsonRes.sys.country}`,
            forecast: `${jsonRes.weather[0].main}`,
            icon: `${jsonRes.weather[0].icon}`,
            humidity: `${jsonRes.main.humidity}`,
            wind: `${jsonRes.wind.speed}`,
            clouds: `${jsonRes.clouds.all}`,
            temperature: `${celsiusTemp}`
        }
        return weatherData;
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api}`;
    }
}