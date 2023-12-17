const tiles = document.querySelectorAll('.tile');

function pickRandomTile() {
  const rando = Math.floor(Math.random() * 16);
  while (tiles[rando].innerText) {
    rando = Math.floor(Math.random() * 16);
  }
  tiles[rando].innerText = Math.random() < 0.9 ? 2 : 4;
}

function init() {
  pickRandomTile();
  pickRandomTile();
}

init();