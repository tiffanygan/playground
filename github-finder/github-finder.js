const usernameInput = document.getElementById("username");
usernameInput.addEventListener("keyup", getUser);

let response;

function getUser() {
  const usernameValue = usernameInput.value;
  const github = new Github(`${usernameValue}`);
  github
    .getUser()
    .then((responseObj) => {
      response = responseObj;
      Ui.showUser(responseObj);
    });
}
