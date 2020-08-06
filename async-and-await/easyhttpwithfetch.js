class EasyHttpWithFetch {
  static get(url) {
    return fetch(url).then(res => res.json());
  }

  static post(url, data) {
    return fetch(url, {method: 'POST', body: JSON.stringify(data)}).then(res => res.json()).then(obj => obj.id);
  }
}
