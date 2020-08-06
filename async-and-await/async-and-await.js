document.getElementById("get-fetch").addEventListener("click", getUsers);
document.getElementById("post-fetch").addEventListener("click", postUsers);
document.getElementById("get-async").addEventListener("click", getAsyncUsers);
document.getElementById("post-async").addEventListener("click", postAsyncUsers);

const ul = document.querySelector("ul");

function getUsers() {
  EasyHttpWithFetch.get("https://jsonplaceholder.typicode.com/users").then(
    (obj) => {
      Array.from(ul.childNodes).forEach((ele) => ele.remove());
      obj.forEach((element) => {
        const liElement = document.createElement("li");
        liElement.textContent = element.name;
        ul.appendChild(liElement);
      });
    }
  );
}

function postUsers() {
  EasyHttpWithFetch.post("https://jsonplaceholder.typicode.com/users", {
    name: "Tiffany",
    email: "tiffanygan2015@gmail.com",
  }).then((id) => {
    Array.from(ul.childNodes).forEach((ele) => ele.remove());
    const liElement = document.createElement("li");
    liElement.textContent = id;
    ul.appendChild(liElement);
  });
}

function getAsyncUsers() {
  EasyHttpWithAwait.get("https://jsonplaceholder.typicode.com/users").then(
    (obj) => {
      Array.from(ul.childNodes).forEach((ele) => ele.remove());
      obj.forEach((ele) => {
        const liElement = document.createElement("li");
        liElement.textContent = ele.name;
        ul.appendChild(liElement);
      });
    }
  );
}

function postAsyncUsers() {
  EasyHttpWithAwait.post("https://jsonplaceholder.typicode.com/users", {
    name: "Tiffany",
  }).then((id) => {
    Array.from(ul.childNodes).forEach((ele) => ele.remove());
    const liElement = document.createElement("li");
    liElement.textContent = id;
    ul.appendChild(liElement);
  });
}
