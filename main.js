document.addEventListener("DOMContentLoaded", function () {
  const endpoint = `https://api.github.com/users/MaxwelSilvas`;

  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const resposElement = document.querySelector("#respos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      nameElement.innerHTML = json.name;
      usernameElement.innerHTML = json.login;
      avatarElement.src = json.avatar_url;
      resposElement.innerHTML = json.public_repos;
      followersElement.innerHTML = json.followers;
      followingElement.innerHTML = json.following;
      linkElement.href = json.html_url;
    })
    .catch(function (erro) {
      alert("Ocorreu um erro ao buscar os dados");
    });
});
