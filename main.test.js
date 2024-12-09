const factories = require("./factories")


test('returns hello', () => {
    expect(factories.greeting("john")).toBe("hello john");
})

test('returns false', () => {
    expect(factories.createPlayer()).toBe(true);
})