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
    }

    function next() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    function check() {

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

    function winner() {

    }

    return {init, begin, redraw, winner};
})();
