let player = "X"
let gameOn = true
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click",function(){
        if(this.innerHTML == "" && gameOn){
            this.innerHTML = player;
            this.classlist.add(player.toLowerCase());
        }
        
        
        
        if(player == "X"){
            player = "O"
        }
        else{
            player = "X "
        }

      }
    );
  }


let Box = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "X", "X"],
];
let n=Box.length
let c=0,c1=0,c2=0,c3=0,score=0,r1=0,r2=0,r3=0
for(i=0;i<n;i++){
    const prev=Box[0][0] // This value is a temperory valu that change to "X " or "Y" according to the Player 
    for(j=0;j<n;j++){
        if (i==j && Box[i][j]==prev){ //for choosing the left to right (0,0) to (2,2) diagonal elements are same
            c+=1
            console.log("dia :"+ i,j)   }
        // for choosing the row wise elements are similar 

        else if(Box[0][j]==prev){
            r1+=1
            console.log("r1 :"+ "0" + j);
        }
        else if(Box[1][j]==prev){
            r2+=1
            console.log("r2 :"+ "1" + j);
        }
        else if(Box[2][j]==prev){
            r3+=1
            console.log("r3 :"+ "2" + j);
        }
    }
    //for choosing column wise elements are similar
    if(Box[i][0]==prev){
        c1+=1
        console.log("c1 :"+i +" 0");
    }
    if(Box[i][1]==prev){
        c2+=1
        console.log("c2 :"+i +" 1");
    }
    if(Box[i][2]==prev){
        c3+=1
        console.log("c3 :"+i +" 2");
    }
    //finding the maximum of adjacent elements
    score=Math.max(c,c1,c2,c3,r1,r2,r3)
}
//if any adjacent elements matches the grid size the place is won
if(score==3){
    console.log("won");}
    else{
        console.log("lose")
    }
   