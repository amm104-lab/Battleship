function createShip(length){

    const shipLength = length;
    let timesHit = 0;
    let hasBeenSunk = false;

    const getTimesHit = () => timesHit;
    const getShipLength = () => shipLength;
    const getIfSunk = () => hasBeenSunk;

    const hit = () => timesHit++;
    const sink = () => {
        if (getTimesHit() === shipLength){
            hasBeenSunk = true;
        }
    }

    return{
        getShipLength,
        getTimesHit,
        getIfSunk,
        hit,
        sink
    }
}


function createGameboard(owner){

    const gameboardOwner = owner;
    let board = [
        [0,0,0,0,0,0,0,0,0,0],      //0 = water
        [0,0,0,0,0,0,0,0,0,0],      //1 = ship
        [0,0,0,0,0,0,0,0,0,0],      //2 = ship - miss
        [0,0,0,0,0,0,0,0,0,0],      //3 = ship - hitwreck
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ]

    let shipBoard = [
        [,,,,,,,,,],      //0 = water
        [,,,,,,,,,],      //1 = ship
        [,,,,,,,,,],      //2 = miss
        [,,,,,,,,,],      //3 = wreck
        [,,,,,,,,,],
        [,,,,,,,,,],
        [,,,,,,,,,],
        [,,,,,,,,,],
        [,,,,,,,,,],
        [,,,,,,,,,],
    ]

    let ships = []

    let attacks = 0;

    const getAttacks = () => attacks;

    const getShips = () => ships;

    const getShipBoard = () => shipBoard;

    const getGameboardOwner = () => gameboardOwner;
    const getBoard = () => board;

    let enemy;

    const getEnemy = () => enemy;

    const setEnemy = (player) => enemy = player;

    const placeShip = (length, i, j, k, l) => {
        const ship = createShip(length);
        ships.push(ship);

        if(i === k){
            for(let m = 0; m < length; m++, j++) {
                getBoard()[i][j] = 1;
                getShipBoard()[i][j] = getShips().indexOf(ship);
            }
        }
        else if(j === l) {
            for(let m = 0; m < length; m++, i++) {
                getBoard()[i][j] = 1;
                getShipBoard()[i][j] = getShips().indexOf(ship);
            }
        }
    }
    const receiveAttack = (i, j) => {
        attacks++;
        if(getBoard()[i][j] === 1){
           let ship = getShips()[getShipBoard()[i][j]];
           ship.hit();
           ship.sink();
           getBoard()[i][j] = 3}
        else{
            getBoard()[i][j] = 2;
        }
    }
    const checkGameOver = () => {

        for(let i = 0; i < getBoard().length; i++){
            for(let j = 0; j < getBoard()[i].length; j++){
                if (getBoard()[i][j] === 1){
                    return false
                }
            }
        }
        return true;

    }

    const getEnd = (x, y, length, direction) => {

        if(direction === "horizontal"){
            let z = x + length;
            placeShip(length,y,x,y,z)
        }
        else{
            let z = y + length;
            placeShip(length,y,x,z,x)
        }
    }

    function autoPlacement(){
        for(let i = 0; i < 5; i++){
            let x = Math.floor(Math.random()*10)
            let y = Math.floor(Math.random()*10)
            let direction = ""

            if(Math.floor(Math.random()*2) === 1){
                direction = "horizontal"
            }
            else{
                direction = "vertical"
            }

            let length = Math.floor(Math.random()*5)

            // console.log(x)
            // console.log(y)
            // console.log(direction)
            // console.log(length)

            getEnd(x,y,length,direction)
        }
    }

    function autoAttack(givenPlayer){
        let x = Math.floor(Math.random()*10)
        let y = Math.floor(Math.random()*10)

        if(givenPlayer){
            givenPlayer.getPlayerBoard().receiveAttack(x,y);
        }

        // console.log("attacked")
        // console.log(x)
        // console.log(y)

        const nodeL = document.querySelectorAll(`.coord`);
        const arr = Array.from(nodeL);
        // console.log(arr[x]);
        const elem = arr[x];
        // console.log(typeof elem)
        // console.log(elem)
        const children = elem.childNodes;
        // console.log(children[y])
        return children[y];
    }


    return{
        getShips,
        getGameboardOwner,
        getBoard,
        getShipBoard,
        getAttacks,
        getEnemy,
        setEnemy,
        placeShip,
        receiveAttack,
        checkGameOver,
        getEnd,
        autoPlacement,
        autoAttack
    }
}

function createPlayer(user){

    const playerBoard = createGameboard(user);
    const playerName = user;

    const getPlayerName = () => playerName;
    const getPlayerBoard = () => playerBoard;

    return{
        getPlayerBoard,
        getPlayerName
    }
}

export {
    createShip,
    createGameboard,
    createPlayer,
}
