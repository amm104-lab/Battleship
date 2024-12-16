function setUpContainer(){

    const body = document.querySelector("body")
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    body.appendChild(container);
}

function setUpPlayerBoard(player) {

    const boardBase = document.createElement("div");
    boardBase.setAttribute("class", "board");
    boardBase.textContent = `${player.getPlayerName()}`;

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

            inate.addEventListener("click", () => {
                console.log(`${i} ${j}`);
                player.getPlayerBoard().receiveAttack(i,j);
                console.table(player.getPlayerBoard().getBoard())
                checkBoard(player, inate);
            })
        }
    }
}

function checkBoard(player, tile){
    for(let index = 0; index < player.getPlayerBoard().getBoard().length; index++){
        for(let undex = 0; undex < player.getPlayerBoard().getBoard()[index].length; undex++){
            if(player.getPlayerBoard().getBoard()[index][undex] != 0){
                switch (player.getPlayerBoard().getBoard()[index][undex]){
                    case 2 :
                        tile.style.backgroundColor = "#4C4CCBFF";
                        break
                    case 3 :
                        tile.style.backgroundColor = "grey";
                        break
                }
            }
        }
    }
}

export {
    setUpPlayerBoard,
    setUpContainer,
}