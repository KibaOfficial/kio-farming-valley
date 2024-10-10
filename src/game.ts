// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DeltaTime } from "./classes/DeltaTime.js";
import { GameCanvas, getGameInit, getGameRun, getPaused, setGameInit } from "./constants.js";
import Logger from "./tools/Logger.js";
import { initCanvas } from "./utils.js";

const deltaTime = new DeltaTime();
let currentWidth: number = window.innerWidth;
let currentHeight: number = window.innerHeight;
let fps: number;


let { game, gameCtx }: GameCanvas = { game: null, gameCtx: null };


export function gameLoop(currentTime: DOMHighResTimeStamp) {
  if (!getGameInit()) {
    const canvasData = initCanvas();
    game = canvasData.game;
    gameCtx = canvasData.gameCtx;
    if (game === null || gameCtx === null) {
      Logger({ status: "ERROR", message: "Game initialization failed"});
      setGameInit(false);
      throw new Error("Game initialization failed");
    }
    setGameInit(true);
    currentWidth = game.width;
    currentHeight = game.height;
  }

  if (getGameRun() && !getPaused()) {
    deltaTime.update(currentTime);
    const dt = deltaTime.getDelta();

    fps = 1000 / dt;

    if (currentWidth !== window.innerWidth || currentHeight !== window.innerHeight) {
      if (game) {
        game.width = window.innerWidth;
        game.height = window.innerHeight;

        currentWidth = window.innerWidth;
        currentHeight = window.innerHeight;

        Logger({ status: "INFO", message: `Canvas resized to: ${currentWidth}x${currentHeight}` });
      }
    }

    requestAnimationFrame(gameLoop);
  }
}

