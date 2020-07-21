const easyHttp = new EasyHttp('https://jsonplaceholder.typicode.com/posts');

document.getElementById('get-posts').addEventListener('click', function() {
    easyHttp.get(function(response) {
        const responseSimpleObjects = JSON.parse(response);
        responseSimpleObjects.forEach(function(element) {
            const liElement = document.createElement('li');
            liElement.textContent = element.title;
            document.querySelector('ul').appendChild(liElement);
        })
    });
});

document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const ulChildren = document.querySelector('ul').children;
    Array.from(ulChildren).forEach(remove);
    easyHttp.post((response, status) => {
        const divElement = document.createElement('div');
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        rowElement.appendChild(divElement);
        divElement.className = 'button';
        const pElement = document.createElement('p');
        divElement.appendChild(pElement);
        const container = document.getElementById('container');
        const line = document.getElementById('line');
        container.insertBefore(rowElement, line);
        if (status === 201) {
            divElement.style.border = 'green solid 1px';
            pElement.textContent = `New post id: ${JSON.parse(response).id}`;
        } else {
            divElement.style.border = 'red solid 1px';
            pElement.textContent =  `Status code: ${status}`;
        }
    }, { 'title': 'My Post', 'body': 'This is my post' });
});

function remove(element) {
    element.remove();
}