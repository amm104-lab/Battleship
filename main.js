import {createPlayer} from "./factories.js";
import {
    setUpContainer,
    setUpPlayerBoard,
    setUpForm
    //setUpAutoAttack
} from "./dom.js";

const john = createPlayer("john");
const com = createPlayer("com");



function setUp(player1,player2){
    player1.getPlayerBoard().setEnemy(player2);
    player2.getPlayerBoard().setEnemy(player1)
    setUpContainer();
    player2.getPlayerBoard().autoPlacement()
    console.table(player2.getPlayerBoard().getBoard())
    setUpPlayerBoard(player1, player2);
    setUpForm(player1, player2);
    //setUpAutoAttack(player2);
}


setUp(john,com);
