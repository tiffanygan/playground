function iterateProfiles() {
  let index = 0;
  let i = 1;
  let profilesLeft = 0;
  let profiles;
  return {
    next: async function() {
      if (profilesLeft === 0) {
        const profilesResponse = await fetch(`./profile-${i}.json`);
        profiles = await profilesResponse.json();
        i = i % 3 + 1;
        profilesLeft = profiles.length;
        index = 0;
      }
      profilesLeft -= 1;
      return profiles[index++];
    }
  }
}

function showResults(information) {
  document.getElementById('image').setAttribute('src', information.img);
  document.getElementById('name').textContent = `Name: ${information.name}`;
  document.getElementById('age').textContent = `Age: ${information.age}`;
  document.getElementById('location').textContent = `Location: ${information.location}`;
}

const profileIterator = iterateProfiles();

profileIterator.next().then(showResults);

document.getElementById('next').addEventListener('click', () => profileIterator.next().then(showResults));