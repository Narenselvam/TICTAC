// Initial game setup
let Box = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
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
        let tempVal = playerX ? "X" : "O";
        let tempId = element.getAttribute("id");
        indexing(tempId, tempVal);
        element.innerText = tempVal;
        element.disabled = true;
        playerX = !playerX;
    })
})

// Update game state
function indexing(tempId, tempVal){
    let coordinates = tempId.split('');
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    Box[x][y] = tempVal;
    winCheck(tempVal);
}

// Check for win condition
function winCheck(player) {
    for (let condition of winningConditions) {
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
            return;
        }
    }
    console.log("lose");
}
