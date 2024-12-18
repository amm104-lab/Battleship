import {createPlayer} from "./factories.js";
import {setUpContainer, setUpPlayerBoard, setUpForm} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");



function game(player1,player2){
    setUpContainer();
    setUpPlayerBoard(player1);
    setUpForm(player1,player2);

    // if(player1.getPlayerBoard().getShips().length >= 5){
    // setUpPlayerBoard(player2);
    // }
}

game(john,com);