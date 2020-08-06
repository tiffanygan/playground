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
  }
}
