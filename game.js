const tiles = document.querySelectorAll('.tile');

function pickRandomTile() {
  let rando = Math.floor(Math.random() * 16);
  while (tiles[rando].innerText) {
    rando = Math.floor(Math.random() * 16);
  }
  tiles[rando].innerText = Math.random() < 0.9 ? 2 : 4;
}

function moveUp() {

}

function moveDown() {

}

function moveRight() {

}

function moveLeft() {

}

function checkGameOver() {
  for (let i = 0; i < tiles.length; i++) {
    if (i < 15 && tiles[i].innerText === tiles[i + 1].innerText && (i + 1) % 4 !== 0) return false;
    if (i < 12 && tiles[i].innerText === tiles[i + 4].innerText) return false;
  }
  return true;
}

function handleKey(direction) {
  switch (direction) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
  }
  if (checkGameOver()) console.log("game over");
  // pickRandomTile();
}

function init() {
  pickRandomTile();
  pickRandomTile();

  document.addEventListener("keydown", function(e) {
    const direction = e.key;
    handleKey(direction);
  });
}

init();