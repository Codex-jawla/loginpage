let username1, password1;
const data = [];

// let btn=document.getElementById('reg-btn')
// btn.addEventListener("click",register())

function register() {
  let username = document.getElementById("tak-name").value;
  let password = document.getElementById("tak-pass").value;
  let chek=0
  for (i = 0; i < data.length; i++) {
    if (username == data[i].username1) {
      alert("Username Exist")
      chek++
    }
  }
  if (chek >= 1) {
    data.push({
      username1: username,
      password1: password,
    });
    alert("register successful");
    console.log(data);
    window.location.href = "index.js";
  }
}
