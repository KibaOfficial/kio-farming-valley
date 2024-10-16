// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static zero(): Vector2 {
    return new Vector2(0, 0);
  }

  static one(): Vector2 {
    return new Vector2(1, 1);
  }

  add(other: Vector2): this {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other: Vector2): this {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  scale(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  dot(other: Vector2): number {
    return this.x * other.x + this.y * other.y;
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): this {
    const len = this.length();
    if (len === 0) return this;
    this.x /= len;
    this.y /= len;
    return this;
  }

  distance(other: Vector2): number {
    return Math.sqrt((other.x - this.x) ** 2 + (other.y - this.y) ** 2);
  }

  angle(other: Vector2): number {
    const dotProduct = this.dot(other);
    const lengths = this.length() * other.length();
    return Math.acos(dotProduct / lengths);
  }

  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  array(): [number, number] {
    return [this.x, this.y];
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
