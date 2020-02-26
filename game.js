let enemy;
let myPlayer;
let gameDiv = document.getElementById("gameDiv");
let nameDiv = document.getElementById("nameDiv");
let gameWindow = document.getElementById("textArea");
let whoseTurn = "player";
let punchButton = document.getElementById("punch");
let kickButton = document.getElementById("kick");

function startGameClicked()
{
    const nameBox = document.getElementById("nameBox");
    if (nameBox.value === "")
    {
        alert("Please Enter Player Name");
        return;
    }
    myPlayer = createPlayer(nameBox.value);
    nameDiv.hidden = true;
    gameDiv.hidden = false;
    addGameText(`Hello ${myPlayer.name}`);
    setupEnemy();
    gameLoop();
}

function gameLoop(){
    if (whoseTurn == "player"){
       addGameText(`It is your turn ${myPlayer.name}`);
       addGameText(`Pick your move`);
       punchButton.disabled = false;
       kickButton.disabled = false;
    }
    else
    {
       addGameText(`It is ${enemy.name}'s turn `);
       punchButton.disabled = true;
       kickButton.disabled = true;
    }
}

function addGameText(text){
    gameWindow.value += text + "\n";
} 

function setupEnemy(){
    enemy = createEnemy("Billo", 33, 5);
    addGameText(`${enemy.name} wants to fight you`);
}

