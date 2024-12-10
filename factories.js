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

    const getGameboardOwner = () => gameboardOwner;
    const getBoard = () => board;

    const placeShip = (length, letter, index) => {
        const ship = createShip(length,0);
        switch (letter){
            case "a" :
                getBoard().a[index] = 1;
                return getBoard().a[index];
                break;
            case "b" :
                getBoard().b[index] = 1;
                return getBoard().b[index];
                break;
            case "c" :
                getBoard().c[index] = 1;
                return getBoard().c[index];
                break;
            case "d" :
                getBoard().d[index] = 1;
                return getBoard().d[index];
                break;
            case "e" :
                getBoard().e[index] = 1;
                return getBoard().e[index];
                break;
            case "f" :
                getBoard().f[index] = 1;
                return getBoard().f[index];
                break;
            case "g" :
                getBoard().g[index] = 1;
                return getBoard().g[index];
                break;
            case "h" :
                getBoard().h[index] = 1;
                return getBoard().h[index];
                break;
            case "i" :
                getBoard().i[index] = 1;
                return getBoard().i[index];
                break;
            case "j" :
                getBoard().j[index] = 1;
                return getBoard().j[index];
                break;
        }

    }
    const receiveAttack = () => {

    }
    const checkGameOver = () => {

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
