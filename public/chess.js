

const container = document.querySelector('.grid-container');

let size = 8;

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        const cell = document.createElement('div');
        cell.dataset.x = x;
        cell.dataset.y = y;

        cell.classList.add('grid-item')
        if ((x + y) % 2 == 0) {
            cell.classList.add('white');
        } else {
            cell.classList.add('black');
        }
        container.appendChild(cell);
    }
}


const blackPawnCells = document.querySelectorAll('[data-y="1"]');
for (const pawn of blackPawnCells) {
    pawn.classList.add('b-pawn');
}
const blackRookCells = document.querySelectorAll('[data-x="7"][data-y="0"], [data-x="0"][data-y="0"]')
for (const rook of blackRookCells) {
    rook.classList.add('b-rook')
}
const blackBishopCells = document.querySelectorAll('[data-x="5"][data-y="0"], [data-x="2"][data-y="0"]');
for (const bishop of blackBishopCells) {
    bishop.classList.add('b-bishop');
}
const blackKnightCells = document.querySelectorAll('[data-x="6"][data-y="0"], [data-x="1"][data-y="0"]')
for (const knight of blackKnightCells) {
    knight.classList.add('b-knight')
}

const blackKingCell = document.querySelector('[data-x="4"][data-y="0"]');
blackKingCell.classList.add('b-king');

const blackQueenCell = document.querySelector('[data-x="3"][data-y="0"]');
blackQueenCell.classList.add('b-queen');



const whitePawnCells = document.querySelectorAll('[data-y="6"]');
for (const pawn of whitePawnCells) {
    pawn.classList.add('w-pawn');
}
const whiteRookCells = document.querySelectorAll('[data-x="7"][data-y="7"], [data-x="0"][data-y="7"]')
for (const rook of whiteRookCells) {
    rook.classList.add('w-rook')
}
const whiteBishopCells = document.querySelectorAll('[data-x="5"][data-y="7"], [data-x="2"][data-y="7"]');
for (const bishop of whiteBishopCells) {
    bishop.classList.add('w-bishop');
}
const whiteKnightCells = document.querySelectorAll('[data-x="6"][data-y="7"], [data-x="1"][data-y="7"]')
for (const knight of whiteKnightCells) {
    knight.classList.add('w-knight')
}

const whiteKingCell = document.querySelector('[data-x="4"][data-y="7"]');
whiteKingCell.classList.add('w-king');

const whiteQueenCell = document.querySelector('[data-x="3"][data-y="7"]');
whiteQueenCell.classList.add('w-queen');