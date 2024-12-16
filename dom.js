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


    for(let i = 0; i < player.getPlayerBoard().getBoard().length; i++){

        const coord = document.createElement("div");
        coord.setAttribute("class", "coord");
        coord.setAttribute("data-index", `${i}`);
        boardBase.appendChild(coord);

        for(let j = 0; j < player.getPlayerBoard().getBoard()[i].length; j++){

            const inate = document.createElement("div");
            inate.setAttribute("class", "inate");
            inate.setAttribute("data-index", `${j}`);
            coord.appendChild(inate);
        }
    }
}

export {setUpPlayerBoard, setUpContainer}