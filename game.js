let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;


const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],


];
const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };


};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulation  Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    console.log("saifmaliik");
};

const checkwinner = () => {
    for (let pattern of winpatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {


                showwinner(pos1Val);
            }
        }
    };
};

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);




