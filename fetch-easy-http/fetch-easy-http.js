function getText() {
    Array.from(document.getElementsByTagName('li')).forEach(ele => ele.remove());
    fetch('./text.txt')
    .then(function(res) {
        return res.text();
    })
    .then(function(text) {
        const liElement = document.createElement('li');
        liElement.textContent = text;
        document.querySelector('ul').appendChild(liElement);
    });
}

function getJson() {
    Array.from(document.getElementsByTagName('li')).forEach(ele => ele.remove());
    fetch('./posts.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(posts) {
        posts.forEach(function(element) {
            const liElement = document.createElement('li');
            liElement.textContent = element.title;
            document.querySelector('ul').appendChild(liElement);
        })
    });
}

function getExternalApi() {
    Array.from(document.getElementsByTagName('li')).forEach(ele => ele.remove());
    fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json();
    })
    .then(function(users) {
        const ulElement = document.querySelector('ul');
        users.forEach(function(user) {
            const liElement = document.createElement('li');
            liElement.textContent = user.login;
            ulElement.appendChild(liElement);
        })
    });
}

document.getElementById('text-btn').addEventListener('click', getText);
document.getElementById('json-btn').addEventListener('click', getJson);
document.getElementById('external-btn').addEventListener('click', getExternalApi);