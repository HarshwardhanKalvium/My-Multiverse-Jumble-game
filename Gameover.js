// Gameover.js
let score = localStorage.getItem("gameScore");
let scoreBox = document.getElementById("score-board").innerText=score;
document.getElementById("replay-btn").onclick=()=>{
    location.href="./Game.html"
}

// Changing the text if the score is above
let scoreboardHeading = document.getElementById("scoreboard-heading");
let scoreboardQuote = document.getElementById("quote");
let newPhrases = [
    {
        heading: "Winner!! Your score is",
        quote: "Strongest in the world"
    },
    {
        heading: "Champion!! Your score is",
        quote: "Man of the hour"
    },
    {
        heading: "victor!! Your score is",
        quote: "All hail the lord"
    },
    {
        heading: "conqueror!! Yor score is",
        quote: "WHATEVER STANDS IN OUR WAY, WE WILL DEFEAT IT"
    },
    {
        heading: "Goat!! Yor score is",
        quote: "The lion does not concern himself with the opinions of the sheep."
    },
];
let randomPhrases;
function create() {
    randomPhrases = newPhrases[Math.floor(Math.random() * newPhrases.length)];
    scoreboardHeading.innerText = randomPhrases.heading;
    scoreboardQuote.innerText = randomPhrases.quote;
}

if (score > 5) {
    create();
}


// Display user name on this page


let obj = JSON.parse(localStorage.getItem("nameData"));
let name = obj.userName
let nickName = obj.playerName

console.log(nickName,name)

