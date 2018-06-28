const display = document.getElementById('display');
var url = 'https://api.github.com/users/marciamillanao';

const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();

  request.open('GET', url, true)
  request.onload = function () {
    let users = JSON.parse(request.responseText);
    if (request.readyState == 4 && request.status == "200") {
      callback(users);
    } else {
      console.error(users);
    }
  }
  request.send(null)
}

getJSON(url, response => {
  response.id;
  display.innerHTML = `<p>${response.name}</p><img src='${response.avatar_url}'>`;

  console.table(response);
})