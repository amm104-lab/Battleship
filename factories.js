function createShip(length){

    //length, times hit, sunk, hit increase
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
    //places ships via factory, receiveAttack to determine if ship was hit, report if all ships have been sunk
    const gameboardOwner = owner;
    let board = [
        [0,0,0,0,0,0,0,0,0,0],      //0 = water
        [0,0,0,0,0,0,0,0,0,0],      //1 = ship
        [0,0,0,0,0,0,0,0,0,0],      //2 = miss
        [0,0,0,0,0,0,0,0,0,0],      //3 = wreck
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

    const getShips = () => ships;

    const getShipBoard = () => shipBoard;

    const getGameboardOwner = () => gameboardOwner;
    const getBoard = () => board;

    const placeShip = (length, i, j, k, l) => {
        const ship = createShip(length);
        ships.push(ship);

        if(i === k){
            for(let m = 0; m < length; m++, j++) {
                getBoard()[i][j] = 1;
                getShipBoard()[i][j] = getShips().indexOf(ship);
            }
        }
        else {
            for(let m = 0; m < length; m++, i++) {
                getBoard()[i][j] = 1;
                getShipBoard()[i][j] = getShips().indexOf(ship);
            }
        }
    }
    const receiveAttack = (i, j) => {
        //take field to attack
        //check if field is populated
        //hit ship if true
        //mark as hit

        if(getBoard()[i][j] === 1){
           let ship = getShips()[getShipBoard()[i][j]];
           ship.hit();
           ship.sink();
           if(ship.getIfSunk() === true){
               getBoard()[i][j] = 3}
        }
        else{
            getBoard()[i][j] = 2;
        }
    }
    const checkGameOver = () => {
        //check board for unhit ships
        for(let i = 0; i < getBoard().length; i++){
            for(let j = 0; j < getBoard()[i].length; j++){
                if (getBoard()[i][j] === 1){
                    return false
                }
        }}
        return true;
    //     for(key in board){
    //         for(let i = 0; i < key.length; i++){
    //             if(i === 1){
    //                 return false;
    //             }
    //             else{
    //                 return true;
    //             }
    //         }
    //     }
    }


    return{
        getShips,
        getGameboardOwner,
        getBoard,
        getShipBoard,
        placeShip,
        receiveAttack,
        checkGameOver,
    }
}

function createPlayer(user){
    //diff in real and com, own gameboard
    const playerBoard = createGameboard(user);
    const playerName = user;

    const getPlayerName = () => playerName;
    const getPlayerBoard = () => playerBoard;

    return{
        getPlayerBoard,
        getPlayerName
    }
}

function greeting(name){
    return "hello " + name;
}

// export {
//     createShip,
//     createGameboard,
//     createPlayer,
//     greeting
// }

module.exports = { greeting, createPlayer, createGameboard, createShip }
