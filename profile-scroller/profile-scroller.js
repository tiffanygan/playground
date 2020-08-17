async function* getUserInformation() {
    let i = 1;
    while (true) {
        let fileName = `./profile-${i}.json`;
        const profileResponse = await fetch(fileName);
        const profiles = await profileResponse.json();
        for (let profile of profiles) {yield profile};
        i = i % 3 + 1;
    }
}

function showResults(information) {
    document.getElementById('image').setAttribute('src', information.img);
    document.getElementById('name').textContent = `Name: ${information.name}`;
    document.getElementById('age').textContent = `Age: ${information.age}`;
    document.getElementById('location').textContent = `Location: ${information.location}`;
}

const profileGenerator = getUserInformation();

function showNextUser() {
    profileGenerator.next().then(res => showResults(res.value));
}

showNextUser();
document.getElementById("next").addEventListener("click", showNextUser);