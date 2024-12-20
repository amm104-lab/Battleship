function setUpContainer(){

    const body = document.querySelector("body")
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    body.appendChild(container);
}

function setUpPlayerBoard(player, player2) {

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
                // console.log(`${i} ${j}`);
                player.getPlayerBoard().receiveAttack(i,j);
                // console.table(player.getPlayerBoard().getBoard())
                checkBoard(player, inate);
                // console.log(player.getPlayerBoard().checkGameOver())

                if(player.getPlayerBoard().checkGameOver() === true){
                    alert(`Game Over! ${player.getPlayerName()}'s ships have all been sunk!`);
                    return false
                }
                // console.log(player.getPlayerBoard().getEnemy().getPlayerName())
                // console.table(player.getPlayerBoard().getEnemy().getPlayerBoard().getBoard())
                let elem = player.getPlayerBoard().getEnemy().getPlayerBoard().autoAttack(player.getPlayerBoard().getEnemy())
                // console.table(player.getPlayerBoard().getEnemy().getPlayerBoard().getBoard())
                // console.table(player.getPlayerBoard().getEnemy().getPlayerBoard().getBoard());

                checkBoard( player.getPlayerBoard().getEnemy(), elem);
                // console.table(player.getPlayerBoard().getEnemy().getPlayerBoard().getBoard())
            })
        }
    }
}

function checkBoard(player, inite){
    for(let index = 0; index < player.getPlayerBoard().getBoard().length; index++){
        for(let undex = 0; undex < player.getPlayerBoard().getBoard()[index].length; undex++){
            if(player.getPlayerBoard().getBoard()[index][undex] != 0 && inite.style.backgroundColor === ""){
                // console.log(player.getPlayerBoard().getBoard()[index][undex])
                switch (player.getPlayerBoard().getBoard()[index][undex]){
                    case 2 :
                        inite.style.backgroundColor = "#4C4CCBFF";
                        break
                    case 3 :
                        inite.style.backgroundColor = "grey";
                        break
                }
                // console.log(inite.style.backgroundColor)
            }
        }
    }
}

function deleteChildren(){
    let e = document.querySelector(".container");
    let child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function setUpForm(player, player2) {

    const dialog = document.createElement("dialog");
    dialog.setAttribute("class", "dialog");
    let container = document.querySelector(".container");
    container.appendChild(dialog);

    const form = document.createElement("form");
    form.setAttribute("method", "dialog");
    form.setAttribute("class", "form");
    dialog.appendChild(form);


    const startPointLabelX = document.createElement("label");
    startPointLabelX.setAttribute("for", "start");
    startPointLabelX.textContent = "Coordinate X";
    form.appendChild(startPointLabelX);

    const X = document.createElement("select");
    X.setAttribute("class", "x");
    X.setAttribute("name", "x");
    form.appendChild(X);

    for(let i = 0; i < 10; i++){
        const Option = document.createElement("option");
        Option.setAttribute("value", `${i}`);
        Option.textContent = `${i}`;
        X.appendChild(Option);
    }

    const startPointLabelY = document.createElement("label");
    startPointLabelY.setAttribute("for", "start");
    startPointLabelY.textContent = "Coordinate Y";
    form.appendChild(startPointLabelY);

    const Y = document.createElement("select");
    Y.setAttribute("class", "y");
    Y.setAttribute("name", "y");
    form.appendChild(Y);

    for(let i = 0; i < 10; i++){
        const Option = document.createElement("option");
        Option.setAttribute("value", `${i}`);
        Option.textContent = `${i}`;
        Y.appendChild(Option);
    }



    const lengthLabel = document.createElement("label");
    lengthLabel.setAttribute("for", "start");
    lengthLabel.textContent = "Ship Length";
    form.appendChild(lengthLabel);

    const length = document.createElement("select");
    length.setAttribute("class", "length");
    length.setAttribute("name", "length");
    form.appendChild(length);

    const fiveOption = document.createElement("option");
    fiveOption.setAttribute("value", "5");
    fiveOption.textContent = "5";
    length.appendChild(fiveOption);

    const threeOption = document.createElement("option");
    threeOption.setAttribute("value", "3");
    threeOption.textContent = "3";
    length.appendChild(threeOption);

    const twoOption = document.createElement("option");
    twoOption.setAttribute("value", "2");
    twoOption.textContent = "2";
    length.appendChild(twoOption);


    const directionLabel = document.createElement("label");
    directionLabel.setAttribute("for", "direction");
    directionLabel.textContent = "Direction";
    form.appendChild(directionLabel);

    const direction = document.createElement("select");
    direction.setAttribute("class", "direction");
    direction.setAttribute("name", "direction");
    form.appendChild(direction);

    const horizontalOption = document.createElement("option");
    horizontalOption.setAttribute("value", "horizontal");
    horizontalOption.textContent = "Horizontal";
    direction.appendChild(horizontalOption);

    const verticalOption = document.createElement("option");
    verticalOption.setAttribute("value", "vertical");
    verticalOption.textContent = "Vertical";
    direction.appendChild(verticalOption);


    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);


    const autoBtn = document.createElement("button");
    autoBtn.setAttribute("class", "auto");
    autoBtn.textContent = "Auto Place"
    form.appendChild(autoBtn);


    dialog.showModal()

    autoBtn.addEventListener("click", () => {
        player.getPlayerBoard().autoPlacement();
        deleteChildren();
        setUpPlayerBoard(player);
        setUpPlayerBoard(player2);
        // console.table(player.getPlayerBoard().getBoard());
        // console.table(player.getPlayerBoard().getBoard());
    })

    submitBtn.addEventListener("click", () => {
        player.getPlayerBoard().getEnd(X.value,Y.value,length.value,direction.value);
        deleteChildren();
        setUpPlayerBoard(player);
        setUpPlayerBoard(player2);
        if(player.getPlayerBoard().getShips().length < 5){
            setUpForm(player, player2);
        }
        // console.table(player.getPlayerBoard().getBoard());
    })
}

export {
    setUpPlayerBoard,
    setUpContainer,
    setUpForm,
    // setUpAutoAttack
}