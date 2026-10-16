# Neon Pong.

A classic arcade-style Pong game built with HTML, CSS, and JavaScript. It includes a neon visual theme, single-player AI mode, local multiplayer, touch controls, pause menu, score tracking, and sound effects.

## Table of Contents.

- [Overview](#overview)
- [How to Start the Game](#how-to-start-the-game)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Game Modes](#game-modes)
- [Rules and Scoring](#rules-and-scoring)
- [Screens and Navigation](#screens-and-navigation)
- [Features](#features)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)
- [Customization](#customization)

## Overview

This game gives players a fast, polished, and highly satisfying arcade Pong experience:

- **1-Player Mode (vs CPU):** Easy, Medium, and Hard difficulty levels
- **2-Player Local Multiplayer:** Multi-touch support on smartphones & shared controls on desktop
- **Direct Hand Touch & Drag:** Smooth, zero-lag finger control on mobile devices
- **Dynamic Rally Acceleration:** Ball speed and trail length increase during intense volleys with rising audio pitch
- **Neon Particle Sparks & Screen Shake:** Visual juice on paddle hits, wall rebounds, and goal explosions
- **Mobile Haptic Feedback:** Vibrations on smartphone hits and score events via `navigator.vibrate`
- **Serve Countdown & Delay:** Brief "READY... SERVE!" pause prevents cheap goals and gives players time to reposition
- **Match Length Options:** Choose First to 5, 11, or 21 points
- **Fullscreen Mode (⛶):** True immersive app-like experience on smartphones and desktop
- **Persistent Stats (LocalStorage):** Tracks Best Rally streak and Win/Loss record across sessions
- **Responsive Layout:** Beautiful in both portrait and landscape orientation on phones, tablets, and PCs

## How to Start the Game.

There are a few easy ways to run the game:

### Option 1: Open the HTML File Directly
1. Download or clone the repository.
2. Open the `index.html` file in any modern web browser (Chrome, Safari, Firefox, Edge).
3. The game will load immediately.

### Option 2: Run a Local Web Server (Play on Smartphone via Wi-Fi)
Running a local web server allows you to test or play the game on your smartphone over your local Wi-Fi network:

Using Python:

```bash
cd pong-game
python3 -m http.server 8000
```

- On your computer: open `http://localhost:8000`
- On your smartphone (connected to the same Wi-Fi): open `http://<your-computer-ip>:8000`

Using Node.js:

```bash
cd pong-game
npx http-server
```

### Option 3: Play Online via GitHub Pages or Render
1. Deploy via GitHub Pages or Render Static Site.
2. Open the link on any smartphone or browser to play instantly!

## How to Play

1. Open the game in your browser or smartphone.
2. Choose your game mode (`vs CPU` or `2 Players`).
3. If playing vs CPU, choose your difficulty (`Easy`, `Medium`, `Hard`).
4. Select your **Target Score** (`5 pts`, `11 pts`, or `21 pts`).
5. Tap **START GAME** (or press Space).
6. Wait for the "READY... SERVE!" countdown and return the ball!
7. Keep volleys alive to rack up your **Rally Combo** and speed up the game.
8. First player to reach the target score wins the match!

## Controls

### 📱 Smartphone & Tablet Controls (Hand / Finger Play)

| Mode | Gesture / Touch | Action |
|------|-----------------|--------|
| **Single Player (vs CPU)** | Touch & drag finger anywhere | Paddle smoothly follows your finger vertically |
| **2 Players (Local)** | Left half of screen | Player 1 paddle |
| **2 Players (Local)** | Right half of screen | Player 2 paddle (multi-touch supported) |
| **Any mode** | Tap ⏸ button (top-left) | Pause / Resume game |
| **Any mode** | Tap ⛶ button (top-right) | Toggle Fullscreen (hides browser bars) |
| **Any mode** | Tap 🔊 button (top-right) | Toggle sound effects on/off |

> **Mobile Tip:** Turn your smartphone sideways (landscape) and tap **⛶ (Fullscreen)** for the ultimate arcade feel! Touch gestures like pull-to-refresh and zoom are completely locked during gameplay.

### 💻 Desktop Controls (Mouse & Keyboard)

#### Single Player Mode

| Control | Action |
|---------|--------|
| 🖱️ Mouse | Move cursor up / down to guide the paddle |
| ↑ / ↓ or W / S | Move left paddle with keyboard |
| Space or ⏸ button | Pause or resume |
| ⛶ button | Toggle Fullscreen |
| 🔊 Sound button | Toggle sound effects |

#### Multiplayer Mode

| Player | Input | Action |
|--------|-------|--------|
| Left player | W / S | Move paddle up / down |
| Right player | Up Arrow / Down Arrow | Move paddle up / down |
| Both players | Touch / Mouse | Left half = P1, Right half = P2 |
| Both players | Space or ⏸ button | Pause or resume |

## Game Modes

### 1. Single Player (vs CPU)
Play against the computer AI:
- **Easy:** Relaxed pace, slower reaction times, forgiving misses
- **Medium:** Balanced competitive arcade experience
- **Hard:** Fast tracking and sharp angles for experienced players

### 2. Local Multiplayer
Two players share the same screen or phone:
- Left player controls the Cyan paddle (P1 area)
- Right player controls the Pink paddle (P2 area)
- Multi-touch enabled: both players can touch and slide simultaneously!

## Rules and Scoring

- A point is scored when the opponent misses the ball.
- Bounces off paddles increase the **Rally Combo** and gradually accelerate ball velocity.
- The ball bounces off the top and bottom walls with spark effects.
- The first player to reach the selected target score (5, 11, or 21) wins the match.
- Personal records (Best Rally & Win/Loss record) are automatically saved to your browser.
- A pause menu is available during gameplay.

## Screens and Navigation

### Title Screen

This is the main menu. It lets you:

- choose a game mode
- choose difficulty
- view controls
- start the game

### Pause Screen.

Press `Space` while playing to pause.

From the pause menu you can:

- Resume the match
- Return to the main menu

### Game Over Screen.

When a player reaches 11 points:

- the winner is shown
- final score is displayed
- you can play again or return to the menu

## Features.

- Neon arcade design
- Responsive layout
- AI opponent with difficulty settings
- Local multiplayer support
- Ball trail effects
- Scoreboard display
- Pause and resume system
- Sound effects and mute toggle
- Mouse, keyboard, and touch support

## Troubleshooting.

### The game does not load
- Make sure JavaScript is enabled.
- Open the file in a modern browser.
- Prefer using a local web server if browser restrictions appear.

### Controls are not working
- Click the game area before using keyboard input.
- Make sure you are in the correct mode.
- On mobile, use the on-screen touch buttons.

### No sound
- Check the volume on your device.
- Make sure the sound toggle is not muted.
- Some browsers require a user interaction before audio plays.

### Game is too hard or too easy
- Change the difficulty in the menu.
- For multiplayer mode, adjust strategy rather than settings.

## Project Structure

```text
pong-game/
├── game.html
├── README.md
├── .gitignore
└── other project files if added later
```

## Customization

The game is built in a single HTML file for easy editing. You can change:

- colors in the CSS variables
- paddle speed
- ball speed
- scoring target
- UI layout

Example CSS variables:

```css
:root {
  --bg: #070b1f;
  --cyan: #7ef9ff;
  --pink: #ff5fd2;
  --yellow: #ffdb5c;
}
```

Examples of game tuning values:

```javascript
const winScore = 11;
const paddleSpeed = 7.2;
const ballRadius = 9;
```

## Conclusion

This project is a polished version of the classic Pong game that is easy to launch, easy to understand, and fun to play both solo and with a friend. It is ideal for learning HTML canvas animation, collision detection, and simple game logic.

If you want to improve the game further, you can add:
- stronger AI behavior
- power-ups
- particles
- a leaderboard
- full-screen mode

Enjoy the game!
