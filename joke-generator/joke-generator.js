document.getElementById('submit-btn').addEventListener('click', jokes);

function jokes() {
    const number = document.querySelector('input').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
    xhr.addEventListener('load', function() {
        const xhrSimpleObject = JSON.parse(this.responseText);
        if (this.status === 200 && xhrSimpleObject.type === 'success') {
            const jokes = JSON.parse(this.responseText).value;
            jokes.forEach(function(e) {
                const jokeLi = document.createElement('li');
                jokeLi.textContent = e.joke;
                document.querySelector('ul').appendChild(jokeLi);
            });
        } else {
            console.log('error');
        }
    })
    xhr.send();
}