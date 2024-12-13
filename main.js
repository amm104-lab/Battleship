const factories = require("./factories")
const dom = require("./dom")

// import {createPlayer} from "./factories";
// import {setUpContainer, setUpPlayerBoard} from "./dom";

const john = factories.createPlayer("john");
const com = factories.createPlayer("com");

dom.setUpContainer();
dom.setUpPlayerBoard(john);
dom.setUpPlayerBoard(com);

// setUpContainer();
// setUpPlayerBoard(john);
// setUpPlayerBoard(com);