class Storage {
  constructor() {
    this.deafultCity = "Mountian View";
    this.deafultState = "California";
    this.cityKey = "city";
    this.stateKey = "state";
  }

  getFromStorage() {
    let city = localStorage.getItem(this.cityKey);
    let state = localStorage.getItem(this.stateKey);

    if (city === null || state === null) {
      localStorage.setItem(this.cityKey, this.deafultCity);
      localStorage.setItem(this.stateKey, this.deafultState);
      city = localStorage.getItem(this.cityKey);
      state = localStorage.getItem(this.stateKey);
    }
    return { city, state };
  }

  setLocalStorage(city, state) {
    localStorage.setItem(this.cityKey, city);
    localStorage.setItem(this.stateKey, state);
  }
}
