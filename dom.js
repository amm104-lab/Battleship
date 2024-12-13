function setUpContainer(){

    const body = document.querySelector("body")
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    body.appendChild(container);
}

function setUpPlayerBoard(player) {

    const boardBase = document.createElement("div");
    boardBase.setAttribute("class", "board");

    const container = document.querySelector(".container");
    container.appendChild(boardBase);

    console.log(player.getPlayerName())

    for(let i = 0; i < player.getPlayerBoard().length; i++){

        const coord = document.createElement("div");
        coord.setAttribute("class", "coord");
        coord.setAttribute("data-index", `${i}`);
        boardBase.appendChild(coord);

        for(let j = 0; j < player.getPlayerBoard()[i].length; j++){

            const inate = document.createElement("div");
            inate.setAttribute("class", "inate");
            inate.setAttribute("data-index", `${j}`);
            boardBase.appendChild(inate);
        }
    }
}

//module.exports = {
//    setUpContainer,
 //   setUpPlayerBoard,
//}

export {setUpPlayerBoard, setUpContainer}