class EasyHttp {
    constructor(url) {
        this.url = url;
    }

    get(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, true);
        xhr.onload = () => {
            const response = xhr.responseText;
            const status = xhr.status;
            callback(response, status);
        }
        xhr.send();
    }

    post(callback, data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);
        xhr.onload = () => {
            const response = xhr.responseText;
            const status = xhr.status;
            callback(response, status);
        }
        xhr.send(data);
    }
}