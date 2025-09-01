console.log("Hi, Mom!");

const player1 = {name: "Player 1", symbol: "X"};
const player2 = {name: "Player 2", symbol: "O"}


const Board = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    function mark(index, symbol) {
        board[index] = symbol;
    }

    function clear() {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    function status() {
        return board;
    }

    return {mark, clear, status};
})();

const Game = (() => {
    let currentPlayer;

    function start() {
        currentPlayer = player1;
    }

    function move(index) {
        Board.mark(index, currentPlayer.symbol);
        console.log(`${currentPlayer.name} plays ${currentPlayer.symbol} at square ${index}.`)
        if (check() === true) {
            Display.gameOver(currentPlayer);
        } else if (check() === false) {
            Display.gameOver("draw");
        } else {
            Game.next();
        }
    }

    function next() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    function check() {
        const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        for (let i = 0; i < 8; i++) {
            let matches = 0;
            for (let j = 0; j < 3; j++) {
                if (Board.status()[wins[i][j]] === currentPlayer.symbol) {
                    matches += 1;
                }
            if (matches === 3) {
                return true; //current player win
            }
        }
        if (!Board.status().includes("")) {
            return false; //draw
        }
        }
        return;
    }

    return {start, move, next, check};
})();

const Display = (() => {
    function init() {

    }

    function begin() {

    }

    function redraw() {

    }

    function gameOver(status) {
        if (status === "draw") {
            console.log("Game ends in a draw.")
        } else if (status !== "draw") {
            console.log(`${status.name} wins the game.`)
        }
    }

    return {init, begin, redraw, gameOver};
})();
