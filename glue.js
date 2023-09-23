// Initial game setup
let Box = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let move=0;
let playerX = true;

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Event listener for the buttons
let btnRef = document.querySelectorAll(".playBox");
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{

        if(playerX){
            playerX=false;
            element.innerText="X";
            element.disabled = true;
            let tempVal=element.innerText;
            let tempId=element.getAttribute("id");
            console.log(tempId);
            indexing(tempId,tempVal);
            disp=`Player - ${tempVal}`
            document.getElementById("player").innerText=disp
        }

        else{
            playerX=true;
            element.innerText="O";
            element.disabled = true;
            let tempVal=element.innerText;
            let tempId=element.getAttribute("id");
            console.log(tempId);
            indexing(tempId,tempVal);
            disp=`Player - ${tempVal}`
            document.getElementById("player").innerText=disp
        }
    })
})

// Update game state
function indexing(tempId, tempVal){
    move+=1;
    let coordinates = tempId.split('');
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    Box[x][y] = tempVal;
    winCheck(tempVal,move);
}

// Check for win condition
function winCheck(player,move) {
    for (let condition of winningConditions) {
        if (move==9){
            res= '<h2>Game👾 is Tied</h2>'
            document.getElementById('res').innerHTML=res;
        }
        let winCondition = [
            Box[Math.floor(condition[0]/3)][condition[0]%3],
            Box[Math.floor(condition[1]/3)][condition[1]%3],
            Box[Math.floor(condition[2]/3)][condition[2]%3]
        ];
        if (winCondition[0] === "" || winCondition[1] === "" || winCondition[2] === "") {
            continue;
        }
        if (winCondition[0] === player && winCondition[1] === player && winCondition[2] === player) {
            console.log("won");
            btnRef.forEach((ele)=>{
                ele.disabled=true;
            })
            res= '<h2>You Won The Game👾</h2>'
            document.getElementById('res').innerHTML=res;

            let symbolColor = player === 'X' ? 'red' : 'red';
            let symbolButtons = document.getElementsByClassName('playBox');
            for (let btn of symbolButtons) {
                btn.style.color = symbolColor;
            }
            return;
        }
    }
    console.log("lose");
}
