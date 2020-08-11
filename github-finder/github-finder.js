const usernameInput = document.getElementById("username");
usernameInput.addEventListener("keyup", getUser);

function getUser() {
  const usernameValue = usernameInput.value;
  const github = new Github(`${usernameValue}`);
    if (usernameValue === '') {
      Ui.hideUser();
      Ui.hideRepos();
      return;
    }

  github.getUser().then((responseObj) => {
    Ui.hideAlert();

    if (responseObj.message === 'Not Found') {
      Ui.showAlert();
      return null;
    }
    
    Ui.showUser(responseObj);
    return github.getRepos();
  }).then( repoResponse => {
    if (repoResponse) {
      Ui.showRepos(repoResponse);
    }
  });
}
