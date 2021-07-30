const Pumpkin = document.querySelector("#player")
const message = document.querySelector("#message")

let x = 350
let y = 419
let yPos = 9
let xPos = 0
let FyPos = 8
let FxPos = 20

const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
]

function mazeboard() {
  let maze = document.querySelector("#maze")
  for (let column = 0; column < map.length; column++) {
    let columnBox = map[column]
    let columnDiv = document.createElement("div")
    columnDiv.classList.add("column")
    columnDiv.dataset.yColumn = column
    maze.appendChild(columnDiv)
    for (let row = 0; row < columnBox.length; row++) {
      let rowBox = columnBox[row]
      let rowDiv = document.createElement("div")
      rowDiv.dataset.yColumn = column
      rowDiv.dataset.xRow = row
      switch (rowBox) {
        case "W":
          rowDiv.classList.add("wall")
          break
        case " ":
          rowDiv.classList.add("path")
          break
        case "S":
          rowDiv.classList.add("starts")
          rowDiv.appendChild(Pumpkin)
          break
        case "F":
          rowDiv.classList.add("finish")
          break
      }
      columnDiv.appendChild(rowDiv)
    }
  }
}
function checkWinner() {
  if (xPos === FxPos && yPos === FyPos) {
    document.body.innerHTML = "Congratulation You Win!"
  }
}
function PlayerPosition(e) {
  if (e.key === "ArrowLeft" && map[yPos][xPos - 1] !== "W") {
    x -= 30
    xPos -= 1
    Pumpkin.style.left = x + "px"
  } else if (e.key === "ArrowRight" && map[yPos][xPos + 1] !== "W") {
    x += 30
    xPos += 1
    Pumpkin.style.left = x + "px"
  } else if (e.key === "ArrowUp" && map[yPos - 1][xPos] !== "W") {
    y -= 30
    yPos -= 1
    Pumpkin.style.top = y + "px"
  } else if (e.key === "ArrowDown" && map[yPos + 1][xPos] !== "W") {
    y += 30
    yPos += 1
    Pumpkin.style.top = y + "px"
  }
  checkWinner()
}
document.addEventListener("keydown", PlayerPosition)

mazeboard()