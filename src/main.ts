// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { gameLoop } from "./game.js";

function startGame() {
  const startTime = performance.now();
  gameLoop(startTime);
}

window.onload = () => {
  startGame();
}