const factories = require("./factories")


test('returns hello', () => {
    expect(factories.greeting("john")).toBe("hello john");
})

test('ship factory', () => {
    expect(factories.createShip()).toBe();
})