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
        return getIfSunk();
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

    let ships = []

    const getShips = ships;

    const getGameboardOwner = () => gameboardOwner;
    const getBoard = () => board;

    const placeShip = (length, i, j) => {
        const ship = createShip(length, 0);
        ships.push(ship);
        getBoard()[i][j] = 1;
    }
    const receiveAttack = (i, j) => {
        //take field to attack
        //check if field is populated
        //hit ship if true
        //mark as hit
        let ship = "";
       if(getBoard()[i][j] === 1){
           ship.sink();
           getBoard()[i][j] = 3
       }
    }
    const checkGameOver = () => {
        //check board for unhit ships
        for(key in board){
            for(let i = 0; i < key.length; i++){
                if(i === 1){
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    }

    return{
        getGameboardOwner,
        getBoard,
        placeShip,
        receiveAttack,
        checkGameOver
    }
}

function createPlayer(user){
    //diff in real and com, own gameboard
    const playerBoard = createGameboard(user);
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
