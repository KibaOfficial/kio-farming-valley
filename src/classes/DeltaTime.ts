// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export class DeltaTime {
    private lastTime: number;
    private deltaTime: number;

    constructor() {
        this.lastTime = 0;
        this.deltaTime = 0;
    }

    update(currentTime: number): void {
        if (this.lastTime === 0) {
            this.lastTime = currentTime
        }

        this.deltaTime = (currentTime - this.lastTime) / 1000

        this.lastTime = currentTime;
    }

    getDelta(): number {
        return this.deltaTime;
    }
}