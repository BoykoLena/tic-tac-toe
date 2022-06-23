let area = document.querySelector("#area");
let move = 0;
let result = "";
let contentWrapper = document.querySelector("#content");
let modalResultWrapper = document.querySelector("#modal-result-wrapper");
let overlay = document.querySelector("#overlay");
let btnClose = document.querySelector("#btn-close");

function prepareResult(winner) {
  if (winner == "Q") {
    contentWrapper.innerHTML = "Winners all around!";
    modalResultWrapper.style.display = "block";
  } else {
    contentWrapper.innerHTML = `Player ${winner} win! <br />🎉🎉🎉`;
    modalResultWrapper.style.display = "block";
  }
}

function check() {
  let boxes = document.querySelectorAll(".box");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == boxes[arr[i][1]].innerHTML &&
      boxes[arr[i][0]].innerHTML == boxes[arr[i][2]].innerHTML
    ) {
      if (boxes[arr[i][0]].innerHTML == "X") {
        result = "X";
        prepareResult(result);
      }
      if (boxes[arr[i][0]].innerHTML == "O") {
        result = "O";
        prepareResult(result);
      }
    } else if (result != "X" && result != "O" && move == 9) {
      result = "Q";
      prepareResult(result);
    }
  }
}

function takeMove(event) {
  if ((event.target.className = "box")) {
    if (event.target.innerHTML == "") {
      if (move % 2 === 0) {
        event.target.innerHTML = "X";
        move = move + 1;
      } else {
        event.target.innerHTML = "O";
        move = move + 1;
      }
      check();
    }
  }
}

function restart() {
  location.reload();
}

area.addEventListener(`click`, takeMove);
overlay.addEventListener(`click`, restart);
btnClose.addEventListener(`click`, restart);
