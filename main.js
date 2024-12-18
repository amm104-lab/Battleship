import {createPlayer} from "./factories.js";
import {setUpContainer, setUpPlayerBoard, setUpForm} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");



function setUp(player1,player2){
    setUpContainer();
    player2.getPlayerBoard().autoPlacement()
    console.table(player2.getPlayerBoard().getBoard())
    setUpPlayerBoard(player1);
    setUpForm(player1,player2);

    // if(player1.getPlayerBoard().getShips().length >= 5){
    // setUpPlayerBoard(player2);
    // }
}

setUp(john,com);