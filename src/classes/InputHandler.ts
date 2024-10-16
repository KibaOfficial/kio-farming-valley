// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getPaused, setPaused } from "../constants.js";
import Logger from "../tools/Logger.js";

export class InputManager {
  private keys: Set<string> = new Set();

  constructor() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    document.addEventListener("keyup", (event) => {
      this.keys.delete(event.key);
    });
  }

  private onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      setPaused(!getPaused());
      if (!getPaused()) {
        Logger({ status: 'DEBUG', message: "Game Paused" });
      } else {
        Logger({ status: 'DEBUG', message: "Game Resumed" });
      }
    }
    this.keys.add(event.key.toLowerCase());
  }

  isKeyPressed(key: string): boolean {
    return this.keys.has(key.toLowerCase());
  }
}