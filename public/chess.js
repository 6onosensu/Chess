

const container = document.querySelector('.grid-container');

let size = 8;

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-item')
        if ((x + y) % 2 == 0) {
            newDiv.classList.add('white');
        } else {
            newDiv.classList.add('black');
        }
        container.appendChild(newDiv);
    }
}


for (let pawn = 0; pawn < size; pawn++) {

}
for (let rook = 0; rook < 2; rook++) {

}
for (let bishop = 0; bishop < 2; bishop++) {

}
for (let knight = 0; knight < 2; knight++) {
    
}
