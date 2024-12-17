import {createPlayer} from "./factories.js";
import {setUpContainer, setUpPlayerBoard, setUpForm} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");

setUpContainer();
setUpPlayerBoard(john);
setUpForm(john);
// setUpPlayerBoard(com);