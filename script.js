const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const startScreen = document.getElementById('startScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const soundToggle = document.getElementById('soundToggle');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Game States
let gameState = 'menu'; // 'menu', 'playing', 'gameover'
let difficulty = 'medium';
let soundEnabled = true;

const keys = {
  ArrowUp: false,
  ArrowDown: false,
};

const paddleWidth = 18;
const paddleHeight = 120;
const ballRadius = 9;
const paddleSpeed = 7.2;
const winScore = 11;

const leftPaddle = {
  x: 30,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  targetY: canvas.height / 2 - paddleHeight / 2,
};

const rightPaddle = {
  x: canvas.width - 30 - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: ballRadius,
  speedX: 5,
  speedY: 3.5,
};

const score = {
  player: 0,
  computer: 0,
};

// Audio Context
let audioContext;

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(frequency, duration, type = 'sine') {
  if (!soundEnabled || !audioContext) return;

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.type = type;
  osc.frequency.value = frequency;

  gain.gain.setValueAtTime(0.3, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime + duration);
}

function playPaddleHit() {
  playSound(600, 0.1, 'sine');
}

function playWallHit() {
  playSound(400, 0.15, 'sine');
}

function playScore() {
  playSound(800, 0.15, 'sine');
  setTimeout(() => playSound(1000, 0.15, 'sine'), 100);
}

function playGameOver() {
  playSound(200, 0.3, 'sine');
  setTimeout(() => playSound(150, 0.3, 'sine'), 150);
}

function playWin() {
  playSound(800, 0.15, 'sine');
  setTimeout(() => playSound(1000, 0.15, 'sine'), 150);
  setTimeout(() => playSound(1200, 0.2, 'sine'), 300);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetBall(direction = 1) {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;

  const baseSpeed = 5;
  ball.speedX = direction * (baseSpeed + Math.random() * 1.8);
  ball.speedY = (Math.random() * 4 - 2) * 1.5;

  if (Math.abs(ball.speedY) < 1.5) {
    ball.speedY = 1.5 * (Math.random() < 0.5 ? -1 : 1);
  }
}

function updateScoreboard() {
  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
}

function updatePlayerPaddle() {
  const mouseY = leftPaddle.targetY;
  const keyboardMovement = (keys.ArrowDown ? 1 : 0) - (keys.ArrowUp ? 1 : 0);

  leftPaddle.targetY += keyboardMovement * paddleSpeed;

  const paddleCenter = leftPaddle.y + leftPaddle.height / 2;
  const difference = mouseY - paddleCenter;
  leftPaddle.y += difference * 0.18;

  leftPaddle.y += keyboardMovement * paddleSpeed;
  leftPaddle.y = clamp(leftPaddle.y, 0, canvas.height - leftPaddle.height);
  leftPaddle.targetY = clamp(leftPaddle.targetY, 0, canvas.height - leftPaddle.height);
}

function getAIDifficulty() {
  const difficultyMap = {
    easy: 0.04,
    medium: 0.08,
    hard: 0.12,
  };
  return difficultyMap[difficulty] || 0.08;
}

function updateComputerPaddle() {
  const aiSpeed = getAIDifficulty();
  let targetY = ball.y - rightPaddle.height / 2;

  // Add some error for easier difficulties
  if (difficulty === 'easy') {
    targetY += (Math.random() - 0.5) * 80;
  } else if (difficulty === 'medium') {
    targetY += (Math.random() - 0.5) * 40;
  }

  rightPaddle.y += (targetY - rightPaddle.y) * aiSpeed;
  rightPaddle.y = clamp(rightPaddle.y, 0, canvas.height - rightPaddle.height);
}

function handleWallCollision() {
  if (ball.y - ball.radius <= 0) {
    ball.y = ball.radius;
    ball.speedY *= -1;
    playWallHit();
  }

  if (ball.y + ball.radius >= canvas.height) {
    ball.y = canvas.height - ball.radius;
    ball.speedY *= -1;
    playWallHit();
  }
}

function handlePaddleCollision(paddle, isLeft) {
  const withinXRange =
    ball.x + ball.radius >= paddle.x &&
    ball.x - ball.radius <= paddle.x + paddle.width;

  const withinYRange =
    ball.y + ball.radius >= paddle.y &&
    ball.y - ball.radius <= paddle.y + paddle.height;

  if (!withinXRange || !withinYRange) {
    return;
  }

  const paddleCenter = paddle.y + paddle.height / 2;
  const relativeIntersect = (ball.y - paddleCenter) / (paddle.height / 2);
  const normalizedHit = clamp(relativeIntersect, -1, 1);

  if (isLeft) {
    ball.x = paddle.x + paddle.width + ball.radius;
  } else {
    ball.x = paddle.x - ball.radius;
  }

  const speedBoost = 1.08;
  const angleInfluence = normalizedHit * 5.5;

  ball.speedX = (isLeft ? 1 : -1) * (Math.abs(ball.speedX) * speedBoost);
  ball.speedY = angleInfluence + ball.speedY * 0.7;

  playPaddleHit();
}

function updateBall() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  handleWallCollision();

  if (ball.x - ball.radius <= leftPaddle.x + leftPaddle.width) {
    if (ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + leftPaddle.height) {
      handlePaddleCollision(leftPaddle, true);
    }
  }

  if (ball.x + ball.radius >= rightPaddle.x) {
    if (ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + rightPaddle.height) {
      handlePaddleCollision(rightPaddle, false);
    }
  }

  if (ball.x - ball.radius < 0) {
    score.computer += 1;
    playScore();
    updateScoreboard();
    checkGameOver();
    if (gameState === 'playing') {
      resetBall(1);
    }
  }

  if (ball.x + ball.radius > canvas.width) {
    score.player += 1;
    playScore();
    updateScoreboard();
    checkGameOver();
    if (gameState === 'playing') {
      resetBall(-1);
    }
  }
}

function checkGameOver() {
  if (score.player >= winScore) {
    endGame(true);
  } else if (score.computer >= winScore) {
    endGame(false);
  }
}

function endGame(playerWon) {
  gameState = 'gameover';
  const gameOverTitle = document.getElementById('gameOverTitle');
  const gameOverMessage = document.getElementById('gameOverMessage');

  if (playerWon) {
    gameOverTitle.textContent = 'You Won!';
    playWin();
  } else {
    gameOverTitle.textContent = 'Game Over!';
    playGameOver();
  }

  gameOverMessage.textContent = `Final Score: ${score.player} - ${score.computer}`;
  gameOverScreen.classList.remove('hidden');
}

function resetGame() {
  score.player = 0;
  score.computer = 0;
  updateScoreboard();
  resetBall(1);
  gameState = 'playing';
  gameOverScreen.classList.add('hidden');
}

function drawCenterLine() {
  ctx.setLineDash([12, 14]);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawPaddle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ffd166';
  ctx.fill();
  ctx.closePath();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCenterLine();
  drawPaddle(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height, '#c9f6ff');
  drawPaddle(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height, '#c9f6ff');
  drawBall();
}

function gameLoop() {
  if (gameState === 'playing') {
    updatePlayerPaddle();
    updateComputerPaddle();
    updateBall();
  }
  render();
  requestAnimationFrame(gameLoop);
}

// Event Listeners
window.addEventListener('keydown', (event) => {
  if (event.key in keys) {
    keys[event.key] = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key in keys) {
    keys[event.key] = false;
  }
});

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = ((event.clientY - rect.top) / rect.height) * canvas.height;
  leftPaddle.targetY = mouseY - leftPaddle.height / 2;
});

startBtn.addEventListener('click', () => {
  initAudio();
  startScreen.classList.add('hidden');
  resetGame();
});

restartBtn.addEventListener('click', () => {
  initAudio();
  gameOverScreen.classList.add('hidden');
  resetGame();
});

difficultyBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    difficultyBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    difficulty = btn.dataset.difficulty;
  });
});

soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggle.classList.toggle('muted', !soundEnabled);
});

// Initialize
updateScoreboard();
resetBall(1);
requestAnimationFrame(gameLoop);
