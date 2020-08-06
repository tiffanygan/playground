class EasyHttpWithAwait {
    static async get(url) {
        const res = await fetch(url);
        const resJson = await res.json();
        return resJson;
    }

    static async post(url, data) {
        const res = await fetch(url, {method: 'POST', body: JSON.stringify(data)});
        const resJson = await res.json();
        const id = resJson.id;
        return id;
    }
}