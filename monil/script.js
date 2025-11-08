const c = document.getElementById("gameCanvas"),
  ctx = c.getContext("2d"),
  road = document.getElementById("roadImg"),
  playerImg = document.getElementById("playerImg"),
  carRed = document.getElementById("carRedImg"),
  carBlue = document.getElementById("carBlueImg");

let player = { x: 450, y: 460, w: 40, h: 40, s: 4 },
  cars = [],
  score = 0,
  lives = 3,
  level = 1,
  run = false,
  keys = {};
const lanes = [150, 220, 290, 360];

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(road, 0, 120, c.width, 300);
  ctx.drawImage(
    playerImg,
    player.x - player.w / 2,
    player.y - player.h / 2,
    player.w,
    player.h
  );
  cars.forEach((car) =>
    ctx.drawImage(
      car.color == "red" ? carRed : carBlue,
      car.x,
      car.y,
      car.w,
      car.h
    )
  );
}

function spawnCar() {
  // dir is direction of the car
  let dir = Math.random() < 0.5 ? 1 : -1,
    y = lanes[Math.floor(Math.random() * lanes.length)],
    x = dir == 1 ? -60 : c.width + 60;
  cars.push({
    x,
    y,
    w: 80,
    h: 50,
    speed: (2 + Math.random() * 2) * dir * level ** 0.5,
    color: dir == 1 ? "red" : "blue",
  });
}

function movePlayer() {
  if (keys.ArrowUp) player.y -= player.s;
  if (keys.ArrowDown) player.y += player.s;
  if (keys.ArrowLeft) player.x -= player.s;
  if (keys.ArrowRight) player.x += player.s;

  player.x = Math.max(player.w / 2, Math.min(c.width - player.w / 2, player.x));
  player.y = Math.max(
    player.h / 2,
    Math.min(c.height - player.h / 2, player.y)
  );
  if (player.y < 80) {
    score += 50;
    level++;
    player.x = 450;
    player.y = 460;
    updateStats();
  }
}

function checkCollisions() {
  cars.forEach((car) => {
    let dx = player.x - Math.max(car.x, Math.min(player.x, car.x + car.w)),
      dy = player.y - Math.max(car.y, Math.min(player.y, car.y + car.h));
    if (dx * dx + dy * dy < (player.w / 2) ** 2) {
      lives--;
      player.x = 450;
      player.y = 460;
      updateStats();
      if (lives <= 0) {
        endGame();
        setTimeout(() => location.reload(), 1500); // reloading after 1 1/2 seconds because not reloading is giving bug
      }
    }
  });
}

function updateCars() {
  cars.forEach((car) => (car.x += car.speed));
  cars = cars.filter((car) => car.x > -150 && car.x < c.width + 150);
}
function updateStats() {
  document.getElementById("score").innerText = score;
  document.getElementById("lives").innerText = lives;
  document.getElementById("level").innerText = level;
}

function loop() {
  if (run) {
    movePlayer();
    updateCars();
    checkCollisions();
    draw();
    requestAnimationFrame(loop);
  }
}

function startGame() {
  document.getElementById("game-over").innerText = "";
  if (!run) {
    run = true;
    setInterval(() => spawnCar(), 1000);
    loop();
  }
}
function endGame() {
  document.getElementById("game-over").innerText = "Game Over";
  cars = [];
  score = lives = level = 0;
  player.x = 450;
  player.y = 460;
  run = false;
  updateStats();
}

window.addEventListener("keydown", (e) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key))
    e.preventDefault();
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => (keys[e.key] = false));
document.getElementById("startBtn").addEventListener("click", startGame);
