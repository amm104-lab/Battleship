//const factories = require("./factories")
//const dom = require("./dom")

import {createPlayer} from "./factories.js";
import {setUpContainer, setUpPlayerBoard} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");

//dom.setUpContainer();
//dom.setUpPlayerBoard(john);
//dom.setUpPlayerBoard(com);

setUpContainer();
setUpPlayerBoard(john);
setUpPlayerBoard(com);
