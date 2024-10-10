// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { gameLoop } from "./game.js";

function startGame() {
    requestAnimationFrame((currentTime) => gameLoop(currentTime))
}

window.onload = () => {
    startGame();
}