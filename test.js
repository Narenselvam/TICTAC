let btnRef = document.querySelectorAll(".playBox");

let playerX = true;
let play=0; 


let Xs=[],Os=[]
let r1=["0","1","2"],rr1=[]
let r2=[3,4,5],rr2=[]
let r3=[6,7,8],rr3=[]
let val=""
let res=""

function Winner(){
    r1.sort()
    r2.sort()
    r3.sort()
    if(r1==rr1){
        return('won')
    }
}
btnRef.forEach((element) =>{
    element.addEventListener("click", () => {

        if (playerX){
            playerX = false;
            element.innerText = "X";
            element.disabled = true;
            val=element.getAttribute("id")
            console.log(element.innerText);
            Xs.push(val)
            if(val<=3){
            rr1.push(val)
            }
            else if(val>3 && val<=5){
                rr2.push(val)
            }
            else if(val>5 && val<=8){
                rr3.push(val)
            }
            res=Winner(val);
        }

        else{ 
            playerX = true;
            element.innerText = "O";
            element.disabled = true;
            console.log(element.innerText);
            val=element.getAttribute("id");
            Os.push(val)
        }
        play+=1;
        if(res=='won'){
            console.log('WON');
        }
        

        console.log(Xs);
        console.log(Os);
    });

    
});








// let Box = [
//     ["X", "O", "O"],//(0,0),(0,1)
//     ["O", "O", "X"],//(1,0),(1,1)
//     ["X", "X", "O"],//(2,0),(2,1)
// ];


// let n=Box.length
// let c=0,c1=0,c2=0,c3=0,score=0,r1=0,r2=0,r3=0
// for(i=0;i<n;i++){
//     const prev=Box[0][0] // This value is a temperory valu that change to "X " or "Y" according to the Player 
//     for(j=0;j<n;j++){
//         if (i==j && Box[i][j]==prev){ //for choosing the left to right (0,0) to (2,2) diagonal elements are same
//             c+=1
//             console.log("dia :"+ i,j)   }
//         // for choosing the row wise elements are similar 

//         else if(Box[0][j]==prev){
//             r1+=1
//             console.log("r1 :"+ "0" + j);
//         }
//         else if(Box[1][j]==prev){
//             r2+=1
//             console.log("r2 :"+ "1" + j);
//         }
//         else if(Box[2][j]==prev){
//             r3+=1
//             console.log("r3 :"+ "2" + j);
//         }
//     }
//     //for choosing column wise elements are similar
//     if(Box[i][0]==prev){
//         c1+=1
//         console.log("c1 :"+i +" 0");
//     }
//     if(Box[i][1]==prev){
//         c2+=1
//         console.log("c2 :"+i +" 1");
//     }
//     if(Box[i][2]==prev){
//         c3+=1
//         console.log("c3 :"+i +" 2");
//     }
//     //finding the maximum of adjacent elements
//     score=Math.max(c,c1,c2,c3,r1,r2,r3)
// }
// //if any adjacent elements matches the grid size the place is won
// if(score==3){
//     console.log("won");}
//     else{
//         console.log("lose")
//     }