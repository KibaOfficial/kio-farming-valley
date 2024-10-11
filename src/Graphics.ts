// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Vector2 } from "./classes/Vector2.js";

export function drawLine(ctx: CanvasRenderingContext2D, p1: Vector2, p2: Vector2, color: string = 'white', lineWidth: number = 1 ): void {
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  ctx.moveTo(...p1.array());
  ctx.lineTo(...p2.array());

  ctx.stroke();
  ctx.restore();
}