const factories = require("./factories")
const main = require("./main")
const dom = require("./dom")
const {createPlayer} = require("./factories");


test('returns hello', () => {
    expect(factories.greeting("john")).toBe("hello john");
})



//createShip factory tests

test('gets ship length', () => {
    expect(factories.createShip(3, 0).getShipLength()).toBe(3);
})

test('get times hit', () => {
    expect(factories.createShip(3, 0).getTimesHit()).toBe(0);
})

test('returns if ship has been sunk', () => {
    expect(factories.createShip(3, 0).getIfSunk()).toBe(false);
})

test('hits ship once', () => {
    expect(factories.createShip(3, 0).hit()).toBe(1);
})

test('sinks ship', () => {
    expect(factories.createShip(3, 3).sink()).toBe(true);
})



//createGameboard factory tests

test('returns gameboardOwner', () => {
    expect(factories.createGameboard("john").getGameboardOwner()).toBe("john");
})

test('returns C4', () => {
    expect(factories.createGameboard("john").getBoard()[2][4]).toBe(0);
})

// test('changes C4', () => {
//     expect(factories.createGameboard("john").placeShip(1,2,4)).toBe(1);
// })

test('checks game over', () => {
    expect(factories.createGameboard("john").checkGameOver()).toBe(true)
})