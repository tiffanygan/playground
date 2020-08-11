class Ui {
  static showUser(userUrl) {
    document.getElementById("response").style.display = "block";
    const imgElement = document.getElementsByTagName("img")[0];
    const viewProfoileBtn = document.getElementById("view-profile-btn");
    const publicRepos = document.getElementById("public-repos");
    const publicGists = document.getElementById("public-gists");
    const following = document.getElementById("following");
    const followers = document.getElementById("followers");
    const company = document.getElementById("company");
    const location = document.getElementById("location");
    const memberSince = document.getElementById("member-since");

    imgElement.src = `${userUrl.avatar_url}`;
    viewProfoileBtn.href = `${userUrl.html_url}`;
    publicRepos.textContent = `Public Repos: ${userUrl.public_repos}`;
    publicGists.textContent = `Public Gists: ${userUrl.public_gists}`;
    following.textContent = `Following: ${userUrl.following}`;
    followers.textContent = `Followers: ${userUrl.followers}`;
    company.textContent = `Company: ${userUrl.company}`;
    location.textContent = `Location: ${userUrl.location}`;
    memberSince.textContent = `Member Since: ${userUrl.created_at}`;

    if (userUrl.message === "Not Found") {
      this.showAlert();
    }
  }

  static hideUser() {
    document.getElementById("response").style.display = "None";
  }
  
  static showRepos(repoObj) {
    if (repoObj.length === 0) {
      Ui.hideRepos();
      return;
    }

    document.getElementById('repo-response').style.display = 'block';
    const firstLi = document.querySelector('#repos-list li');
    const repoUl = document.getElementById('repos-list');
    Array.from(repoUl.childNodes).forEach(ele => ele.remove());
    repoObj.forEach((ele) => {
      repoUl.appendChild(Ui.createRepoList(firstLi, ele.name, ele.stargazers_count, ele.watchers_count, ele.forks_count));
    })
  }

  static hideRepos() {
    document.getElementById('repo-response').style.display = 'none';
  }
  
  static createRepoList(li, name, stars, watchers, forks) {
    const liClone = li.cloneNode(true);
    liClone.querySelector('div.repo-name').textContent = name;
    liClone.querySelector('span.repo-star').textContent = `Stars: ${stars}`;
    liClone.querySelector('span.repo-watchers').textContent = `Watchers: ${watchers}`;
    liClone.querySelector('span.repo-forks').textContent = `Forks: ${forks}`;
    return liClone;
  }

  static showAlert() {
    const warning = document.createElement("div");
    warning.textContent = "This user does not exist. Please try something else";
    warning.classList = "alert alert-danger";
    warning.id = "warning";
    const firstContainer = document.querySelector(".container");
    const firstCard = document.querySelector(".card");
    firstContainer.insertBefore(warning, firstCard);
    setTimeout(() => this.hideAlert(), 3000);
  }

  static hideAlert() {
    const warning = document.getElementById("warning");
    if (warning) {
      warning.remove();
      return;
    }
  }
}
