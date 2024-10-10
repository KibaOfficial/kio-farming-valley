// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DeltaTime } from "./classes/DeltaTime.js";
import { getGameInit, getGameRun, isPaused, setGameInit } from "./constants.js";
import { initCanvas } from "./utils.js";

const deltaTime = new DeltaTime();

export function gameLoop(currentTime: number) {
  if (!getGameInit()) {
    const { game, gameCtx } = initCanvas();
    setGameInit(true)
  }

  if (getGameRun() && !isPaused) {
    const dt = deltaTime.getDelta();

    requestAnimationFrame(gameLoop)
  }
}