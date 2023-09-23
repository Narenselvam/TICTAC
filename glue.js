
let btnRef = document.querySelectorAll(".playBox");

let tempVal=""
let tempId=0;
let playerX = true;

function indexing(tempId,tempVal){
    let x=parseInt(tempId[0]);
    let y=parseInt(tempId[1]);
    Box[x][y]=tempVal;
    console.log(Box)
}

let Box = [
    ["", "", ""],//(0,0),(0,1)
    ["", "", ""],//(1,0),(1,1)
    ["", "", ""],//(2,0),(2,1)
];
console.log(Box);

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

        }

        else{
            playerX=true;
            element.innerText="O";
            element.disabled = true;
            let tempVal=element.innerText;
            let tempId=element.getAttribute("id");
            console.log(tempId);
            indexing(tempId,tempVal);
        }
    })
})