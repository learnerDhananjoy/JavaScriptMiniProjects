let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let trunO = true; //playerX, playerO

const winpatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]

];

const resetgame = () =>{
    trunO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");

        if(trunO){
            box.innerText ="O";
            trunO = false;
        }else{
            //playerX

            box.innerText ="X";
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
    });
    
})

const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};



const enabledboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
    
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulations the Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value !=="" && pos2value !=="" && pos3value !==""){
            if(pos1value === pos2value && pos2value === pos3value){
                console.log("winner", pos1value);
                showWinner(pos1value);
            }
        }

    }
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

