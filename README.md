# Neon Pong

A classic arcade-style Pong game built with HTML, CSS, and JavaScript. It includes a neon visual theme, single-player AI mode, local multiplayer, touch controls, pause menu, score tracking, and sound effects.

## Table of Contents

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
- Two-player local mode on the same keyboard
- Mouse control for the left paddle in single-player mode
- Keyboard controls for both players
- Mobile touch controls
- Ball trail effects and arcade neon visuals
- Pause and restart menu flow
- Scoreboard and win condition

## How to Start the Game

There are a few easy ways to run the game:

### Option 1: Open the HTML File Directly
1. Download or clone the repository.
2. Open the `game.html` file in a browser.
3. The game will load immediately.

### Option 2: Run a Local Web Server
This is recommended for a smoother experience and to avoid browser restrictions.

Using Python:

```bash
cd pong-game
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using Node.js:

```bash
cd pong-game
npx http-server
```

Then open the local URL shown in the terminal.

## How to Play

1. Open the game in your browser.
2. The title screen appears.
3. Choose your game mode:
   - `vs CPU` for single-player
   - `2 Players` for local multiplayer
4. If you selected single-player, pick a difficulty:
   - Easy
   - Medium
   - Hard
5. Press any key or click the start button to begin.
6. Keep the ball in play and score points by making the opponent miss it.
7. First player to 11 points wins.

## Controls

### Single Player Mode

| Control | Action |
|---------|--------|
| 🖱️ Mouse | Move the left paddle up and down |
| ↑ / ↓ Arrow Keys | Move left paddle |
| Space | Pause or resume |
| 🔊 Sound button | Toggle sound |

### Multiplayer Mode

| Player | Input | Action |
|--------|-------|--------|
| Left player | W / S | Move paddle up/down |
| Right player | Up Arrow / Down Arrow | Move paddle up/down |
| Both players | Space | Pause or resume |
| Both players | Sound button | Toggle sound |

### Mobile Controls

On smaller screens, touch controls appear at the bottom of the game area:

- Left touch pad: controls the left paddle
- Right touch pad: controls the right paddle

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

### Pause Screen

Press `Space` while playing to pause.

From the pause menu you can:

- Resume the match
- Return to the main menu

### Game Over Screen

When a player reaches 11 points:

- the winner is shown
- final score is displayed
- you can play again or return to the menu

## Features

- Neon arcade design
- Responsive layout
- AI opponent with difficulty settings
- Local multiplayer support
- Ball trail effects
- Scoreboard display
- Pause and resume system
- Sound effects and mute toggle
- Mouse, keyboard, and touch support

## Troubleshooting

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
