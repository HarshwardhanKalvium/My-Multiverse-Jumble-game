// Home.js
let button = document.getElementById("button");

button.onclick = () => {
  let userName = document.getElementById("user-name").value;
  let playerName = document.getElementById("player-name").value;
  if (playerName.trim() === "" || userName.trim() === ""){
      alert("Please enter your warrior name to proceed further.");
  } else {
    let obj = {
      userName: userName,
      playerName: playerName
    };
    localStorage.setItem("nameData",JSON.stringify(obj))

    location.href = "./Game.html";
  }
};