// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let gameInit = false;
let gameRun = true;
let paused = false;

export interface GameCanvas {
  game: HTMLCanvasElement;
  gameCtx: CanvasRenderingContext2D;
}

export function setGameInit(value: boolean) {
  gameInit = value;
}

export function getGameInit() {
  return gameInit;
}

export function setGameRun(value: boolean) {
  gameRun = value;
}

export function getGameRun() {
  return gameRun;
}

export function setPaused(value: boolean) {
  paused = value;
}

export function isPaused() {
  return paused;
}