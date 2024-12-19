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
    setUpContainer();
    player2.getPlayerBoard().autoPlacement()
    console.table(player2.getPlayerBoard().getBoard())
    setUpPlayerBoard(player1, player2);
    setUpForm(player1, player2);
    //setUpAutoAttack(player2);
}

// function game(player1,player2){
//     while(player2.getPlayerBoard().checkGameOver()===false){
//         if(player2.getPlayerBoard().getAttacks() < player1.getPlayerBoard().getAttacks()){
//             console.log("attack");
//             player2.getPlayerBoard().autoAttack(player1);
//         }
//     }
// }

setUp(john,com);
