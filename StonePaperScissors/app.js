let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const  compscorepara = document.querySelector("#comp-score");
//comp part


const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}



const drawGame = () =>{
    //console.log("game was draw");
    message.innerText = "Game was draw. Play Again!";
      message.style.backgroundColor = "grey";
    
}

const showWinner = (userWin, choiceid, compchoice) =>{

    if(userWin){
       // console.log("you win!");
        userScore++;
        console.log(userScore);
        userscorepara.innerText = userScore;
        message.innerText = `You Win! Your ${choiceid} beats ${compchoice}`;
        message.style.backgroundColor = "green";
    }
    else{
       // console.log("you loose!");
        compScore++;
        console.log(compScore);
        compscorepara.innerText = compScore;
        message.innerText = `You loose! Computer's ${compchoice} beats your ${choiceid}`
        message.style.backgroundColor = "red";
    }
}


//user part 
const playGame = (choiceid) =>{
    console.log("userchoiceids=", choiceid);

    //generate computer choice
    const compchoice = genComputerChoice();

    console.log("compchoiceids=", compchoice);

    if(choiceid === compchoice){
        //Draw Condition
        drawGame();
    }
    else{
        let userWin = true;
        if(choiceid === "rock"){

            //scissors or paper
           userWin = compchoice === "paper" ? false : true;
        } else if(choiceid === "paper"){
            //rock or scissors
           userWin =  compchoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
          userWin =  compchoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceid, compchoice);
    }


}



choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const choiceid = choice.querySelector("img").getAttribute("id");
       // console.log("choice was clicked", choiceid);
        playGame(choiceid);
    });
});