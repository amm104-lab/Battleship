const factories = require("./factories")
const main = require("./main")
const dom = require("./dom")
const {createPlayer} = require("./factories");


test('returns hello', () => {
    expect(factories.greeting("john")).toBe("hello john");
})



//createShip factory tests

test('gets ship length', () => {
    expect(factories.createShip(3).getShipLength()).toBe(3);
})

test('get times hit', () => {
    expect(factories.createShip(3).getTimesHit()).toBe(0);
})

test('returns if ship has been sunk', () => {
    const ship = factories.createShip(3)
    expect(ship.getIfSunk()).toBe(false);
})

test('hits ship once', () => {
    const ship = factories.createShip(3)
    ship.hit();
    expect(ship.getTimesHit()).toBe(1);
})

test('sinks ship', () => {
    const ship = factories.createShip(3)
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.getTimesHit()).toBe(3);
    ship.sink();
    expect(ship.getIfSunk()).toBe(true);
})



//createGameboard factory tests

test('returns gameboardOwner', () => {
    expect(factories.createGameboard("john").getGameboardOwner()).toBe("john");
})

test('returns C4', () => {
    expect(factories.createGameboard("john").getBoard()[2][4]).toBe(0);
})

test('changes C4', () => {
    let john = factories.createGameboard("john")
    john.placeShip(1,2,4);
    expect(john.getBoard()[2][4]).toBe(1);
})

test('checks game over', () => {
    expect(factories.createGameboard("john").checkGameOver()).toBe(true)
})

test('game over after all ships have been sunk', () => {
    let john = factories.createGameboard("john");
    john.placeShip(1, 2, 3);
    expect(john.getBoard()[2][3]).toBe(1);
    expect(john.checkGameOver()).toBe(false);
    john.receiveAttack(2,3)
    expect(john.getShips()[0].getIfSunk()).toBe(true);
    expect(john.getBoard()[2][3]).toBe(3);
    expect(john.checkGameOver()).toBe(true);
})

test('places ship in ship array', () => {
    let john = factories.createGameboard("john");
    let ship = john.placeShip(1, 2, 5);
    expect(john.getShips()).toBeDefined();
})

test('places multiple ships in ship array', () => {
    let john = factories.createGameboard("john");
    john.placeShip(1, 2, 5);
    john.placeShip(1, 3,5);
    expect(john.getShips()[0]).toBeDefined();
    expect(john.getShips()[1]).toBeDefined();
})

test('places ship index in shipBoard according to board', () => {
    let john = factories.createGameboard("john");
    john.placeShip(1, 2, 5);
    expect(john.getShipBoard()[2][5]).toBe(0);
    john.placeShip(1, 5, 3);
    expect(john.getShipBoard()[5][3]).toBe(1);
})

test('gets object from ships over shipBoard according to board', () => {
    let john = factories.createGameboard("john");
    john.placeShip(1, 2, 5);
    expect(john.getShips()[john.getShipBoard()[2][5]]).toBeDefined();
    let ship = john.getShips()[john.getShipBoard()[2][5]]
    ship.hit()
    expect(ship.getTimesHit()).toBe(1)
})

test('marks water, ships, wracks and misses correctly', () => {
    let john = factories.createGameboard("john");
    john.placeShip(1, 2, 5);
    john.placeShip(1, 3, 4);
    john.receiveAttack(3,4);
    john.receiveAttack(2,4);
    expect(john.getBoard()[1][7]).toBe(0);
    expect(john.getBoard()[2][5]).toBe(1);
    expect(john.getBoard()[2][4]).toBe(2);
    expect(john.getBoard()[3][4]).toBe(3);
})

test('places ships longer than 1', () => {
    let john = factories.createGameboard("john");
    john.placeShip(3, 2, 5, 2,7);
    expect(john.getBoard()[2][5]).toBe(1);
    expect(john.getBoard()[2][6]).toBe(1);
    expect(john.getBoard()[2][7]).toBe(1);
})

//createPlayer factory tests

test('returs name', () => {
    expect(factories.createPlayer("john").getPlayerName()).toBe("john");
})

test('creates gameboard and allows access to it', () => {
    let john = factories.createPlayer("john");
    expect(john.getPlayerBoard()).toBeDefined();
    expect(john.getPlayerBoard().getBoard()[2][4]).toBe(0);
})