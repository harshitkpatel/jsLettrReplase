const letters = ["A", "B", "C","D", "E", "F", "G", "H"];
const letterContainer = document.getElementById('letterTilesContainer');
const output = document.getElementById('output');

function letterClick(letter) {
    output.textContent += letter;
    output.textContent = output.textContent.replace(/([A-Z])\1\1/g, '_');
}

letters.forEach((letter) => {
    const tile = document.createElement('div');
    tile.textContent = letter;

    tile.addEventListener('click', () => letterClick(letter));

    letterContainer.appendChild(tile);
});