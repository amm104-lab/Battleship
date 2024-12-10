function createShip(length,damaged){

    //length, times hit, sunk, hit increase
    const shipLength = length;
    let timesHit = damaged;
    let hasBeenSunk = false;

    const getTimesHit = () => timesHit;
    const getShipLength = () => shipLength;
    const getIfSunk = () => hasBeenSunk;

    const hit = () => timesHit+1;
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
    let board = {
        a : [0,0,0,0,0,0,0,0,0,0],
        b : [0,0,0,0,0,0,0,0,0,0],
        c : [0,0,0,0,0,0,0,0,0,0],
        d : [0,0,0,0,0,0,0,0,0,0],
        e : [0,0,0,0,0,0,0,0,0,0],
        f : [0,0,0,0,0,0,0,0,0,0],
        g : [0,0,0,0,0,0,0,0,0,0],
        h : [0,0,0,0,0,0,0,0,0,0],
        i : [0,0,0,0,0,0,0,0,0,0],
        j : [0,0,0,0,0,0,0,0,0,0],
    }

    const placeShip = (ship, placement) => {

    }
    const receiveAttack = () => {

    }
    const checkGameOver = () => {

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
