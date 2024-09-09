// let boxes = document.querySelectorAll(".box");
// let button = document.querySelectorAll("#buttn");
// let turno = true;
// const winpattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 4, 6],
//   [2, 5, 8],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     console.log("box was clicked");
//     if (turno) {
//       box.innerText = "O";
//       turno = false;
//     } else {
//       box.innerText = "X";
//       turno = true;
//     }
//     box.disabled = true;
//     checkwinner();
//   });
// });
// /*forEach perform iteration on each box
//   eventlistner fuction run on each block when box is click
//   function of block execute and print  log result
//   start condition statement for alternate turn
//   condition: turno=true (usero turn)
//   innertext(box) print O 
//   now turno convert to  false
//   if turno is not true
//   innertext(box) print X
//   now turno convert to  true 
//   if we click once it stored fix(O,X) value by disabled the box
//   for checking winner declare a function(checkwinner)*/

//  const checkwinner = () => {
//    for (let pattern of winpattern) {
// let pos1val = boxes[pattern[0]].innerText;
//      let pos2val = boxes[pattern[1]].innerText;
//      let pos3val = boxes[pattern[2]].innerText;
//      console.log(pos1val, pos2val, pos3val);
//      if (pos1val != "" && pos2val != "" && pos3val != "")
//      {
//          if( pos1val ===  pos2val &&  pos2val ===  pos3val){
//              console.log ("wnner",pos1val);
             
//          }
//     }
//   }
// };

/*call function checkwinner
  run 'for loop' for returns key-value store  in pattern variable (return value of array)*/
  let boxes = document.querySelectorAll(".box");
  let turno = true;
  let gameOver = false;
  const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (!gameOver && box.innerText === "") { // Add condition to prevent moves after game over and in already filled cells
        if (turno) {
          box.innerText = "O";
        } else {
          box.innerText = "X";
        }
        turno = !turno;
        box.disabled = true;
        checkWinner();
      }
    });
  });
  
  const checkWinner = () => {
    for (let pattern of winpattern) {
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
        gameOver = true;
        displayWinner(pos1val);
        return;
      }
    }
    // Check for draw
    if ([...boxes].every(box => box.innerText !== "")) {
      gameOver = true;
      displayWinner("Draw");
    }
  };
  

  let resetButton = document.getElementById("buttn");

  resetButton.addEventListener("click", () => {
    resetGame();
  });

  const resetGame = () => {
    // Clear all boxes
    boxes.forEach(box => {
      box.innerText = "";
      box.disabled = false;
    });
    // Reset variables
    turno = true;
    gameOver = false;
  };
  const displayWinner = (winner) => {
    if (winner === "Draw") {
      alert("It's a draw!");
    } else {
      alert("Winner: " + winner);
    }
  };
  
  