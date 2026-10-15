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

This game gives players a simple but polished Pong experience:

- One-player mode against a computer opponent
- Two-player local mode on the same device (multi-touch & keyboard support)
- Direct touch-and-drag hand controls on smartphones and tablets (no mouse needed)
- Mouse control for paddles on desktop
- Keyboard controls for both players (W/S and Arrow keys)
- Responsive layout adapting to smartphone portrait and landscape modes
- On-screen touch buttons for pause/resume (⏸) and sound (🔊)
- Ball trail effects and arcade neon visuals
- Pause and restart menu flow
- Scoreboard and win condition

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

### Option 3: Play Online via GitHub Pages
1. Go to repository **Settings** > **Pages** on GitHub.
2. Under **Source**, choose `Deploy from a branch` and select `main` (root).
3. Open the published link on your mobile phone browser to play anywhere.

## How to Play

1. Open the game in your browser or smartphone.
2. The title screen appears.
3. Choose your game mode:
   - `vs CPU` for single-player against AI
   - `2 Players` for local two-player duel on the same screen
4. If you selected single-player, pick a difficulty:
   - Easy
   - Medium
   - Hard
5. Tap **START GAME** (or press Space / click start).
6. Keep the ball in play and score points by making the opponent miss it.
7. First player to 11 points wins!

## Controls

### 📱 Smartphone & Tablet Controls (Hand / Finger Play)

| Mode | Gesture / Touch | Action |
|------|-----------------|--------|
| **Single Player (vs CPU)** | Touch & drag finger anywhere | Paddle smoothly follows your finger vertically |
| **2 Players (Local)** | Left half of screen | Player 1 paddle |
| **2 Players (Local)** | Right half of screen | Player 2 paddle (multi-touch supported) |
| **Any mode** | Tap ⏸ button (top-left) | Pause / Resume game |
| **Any mode** | Tap 🔊 button (top-right) | Toggle sound effects on/off |

> **Mobile Tip:** Turn your smartphone sideways (landscape) for the classic full-screen arcade experience! Accidental page scrolling, zoom, and text selection are locked during gameplay.

### 💻 Desktop Controls (Mouse & Keyboard)

#### Single Player Mode

| Control | Action |
|---------|--------|
| 🖱️ Mouse | Move cursor up / down to guide the paddle |
| ↑ / ↓ or W / S | Move left paddle with keyboard |
| Space | Pause or resume |
| ⏸ button | Pause or resume |
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

Play against the computer.

- Easy: slower reactions and more mistakes
- Medium: balanced gameplay
- Hard: faster reactions and sharper tracking

### 2. Local Multiplayer

Two players share the same screen and keyboard.

- Left player uses `W` and `S`
- Right player uses the up and down arrow keys

## Rules and Scoring

- A point is scored when the opponent misses the ball.
- The ball bounces off the top and bottom walls.
- The ball bounces off paddles and changes direction based on impact position.
- The first player to reach 11 points wins the round.
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
