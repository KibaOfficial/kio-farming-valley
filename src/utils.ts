// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { GameCanvas } from "./constants.js";
import Logger from "./tools/Logger.js";

export function greet(name: string): string {
  const msg = `Hello ${name}`;
  Logger({ status: "INFO", message: msg});
  return msg;
}

export function initCanvas(): GameCanvas {
  const game = document.getElementById("gameCanvas") as HTMLCanvasElement | null;

  if (game === null) {
    Logger({ status: "ERROR", message: "Game element not found"});
    throw new Error("game element not found");
  }

  const ctx = game.getContext("2d");

  if (ctx === null) {
    Logger({ status: "ERROR", message: "Game context not found"});
    throw new Error("game context not found");
  }

  Logger({ status: "INFO", message: "Game initialized successfuly"})
  return { game, gameCtx: ctx };
}

export function updateLayer(ctx: CanvasRenderingContext2D | null, drawFn: (ctx: CanvasRenderingContext2D) => void): void {
  if (ctx === null) {
    return;
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawFn(ctx);
}