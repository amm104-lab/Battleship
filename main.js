import {createPlayer} from "./factories.js";
import {setUpContainer, setUpPlayerBoard} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");

setUpContainer();
setUpPlayerBoard(john);
setUpPlayerBoard(com);
