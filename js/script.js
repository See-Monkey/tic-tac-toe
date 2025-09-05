console.log("Hi, Mom!");

const player1 = {name: "Play 1", symbol: "X"};
const player2 = {name: "Play 2", symbol: "O"}


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
    const dialog = document.querySelector("dialog");
    const start = document.querySelector("#startBtn");

    function init() {
        dialog.showModal();
    }

    function begin() {
        console.log("start clicked");
        const p1nameInput = document.querySelector("#p1nameInput");
        const p2nameInput = document.querySelector("#p2nameInput");
        const p1name = document.querySelector(".p1name");
        const p2name = document.querySelector(".p2name");
        const p1symbol = document.querySelector(".p1symbol");
        const p2symbol = document.querySelector(".p2symbol");

        player1.name = p1nameInput.value || "Player 1";
        player2.name = p2nameInput.value || "Player 2";
        p1name.textContent = player1.name;
        p2name.textContent = player2.name;
        p1symbol.textContent = player1.symbol;
        p2symbol.textContent = player2.symbol;
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

    start.addEventListener("click", begin);

    return {init, begin, redraw, gameOver};
})();

Display.init();