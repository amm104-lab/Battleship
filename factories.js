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
        a : [0,0,0,0,0,0,0,0,0,0],      //0 = water
        b : [0,0,0,0,0,0,0,0,0,0],      //1 = ship
        c : [0,0,0,0,0,0,0,0,0,0],      //3 = wreck
        d : [0,0,0,0,0,0,0,0,0,0],      //4 = miss
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
        const ship = createShip(length, 0);
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
    const receiveAttack = (letter, index) => {
        //take field to attack
        //check if field is populated
        //hit ship if true
        //mark as hit
        switch (letter){
            case "a" :
                if(getBoard().a[index] === 1){
                    ship.hit();
                    getBoard().a[index] = 3;
                }
                else{
                    getBoard().a[index] = 4;
                }
                break;
            case "b" :
                if(getBoard().b[index] === 1){
                    ship.hit();
                    getBoard().b[index] = 3;
                }
                else{
                    getBoard().b[index] = 4;
                }
                break;
            case "c" :
                if(getBoard().c[index] === 1){
                    ship.hit();
                    getBoard().c[index] = 3;
                }
                else{
                    getBoard().c[index] = 4;
                }
                break;
            case "d" :
                if(getBoard().d[index] === 1){
                    ship.hit();
                    getBoard().d[index] = 3;
                }
                else{
                    getBoard().d[index] = 4;
                }
                break;
            case "e" :
                if(getBoard().e[index] === 1){
                    ship.hit();
                    getBoard().e[index] = 3;
                }
                else{
                    getBoard().e[index] = 4;
                }
                break;
            case "f" :
                if(getBoard().f[index] === 1){
                    ship.hit();
                    getBoard().f[index] = 3;
                }
                else{
                    getBoard().f[index] = 4;
                }
                break;
            case "g" :
                if(getBoard().g[index] === 1){
                    ship.hit();
                    getBoard().g[index] = 3;
                }
                else{
                    getBoard().g[index] = 4;
                }
                break;
            case "h" :
                if(getBoard().h[index] === 1){
                    ship.hit();
                    getBoard().h[index] = 3;
                }
                else{
                    getBoard().h[index] = 4;
                }
                break;
            case "i" :
                if(getBoard().i[index] === 1){
                    ship.hit();
                    getBoard().i[index] = 3;
                }
                else{
                    getBoard().i[index] = 4;
                }
                break;
            case "j" :
                if(getBoard().j[index] === 1){
                    ship.hit();
                    getBoard().j[index] = 3;
                }
                else{
                    getBoard().j[index] = 4;
                }
                break;
        } //dry this!!
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
