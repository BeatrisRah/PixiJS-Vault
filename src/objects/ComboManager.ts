import type { Direction } from "../types/directionType";
export class ComboManager {
    combo: [number, Direction][];
    currentStep: number;
    accumulatedSteps: number;

    constructor() {
        this.combo = []
        this.currentStep = 0;
        this.accumulatedSteps = 0;
        this.generateCombo()
    }

    generateCombo() {
        this.combo = Array.from({ length: 3 }, () => [
            Math.floor(Math.random() * 9) + 1,
            Math.random() > 0.5 ? 'clockwise' : 'counterclockwise',
        ]);
        this.currentStep = 0;
        this.accumulatedSteps = 0;
        console.log('Secret combination:', this.combo.map(([n, d]) => `${n} ${d}`).join(', '));
    }

    checkCombo(steps: number, dir: Direction) {
        if (this.currentStep >= this.combo.length) return 'success';

        const [expectedSteps, expectedDir] = this.combo[this.currentStep];

        if (dir !== expectedDir) {
            console.log('fail');
            return 
        }

        this.accumulatedSteps += steps;

        if (this.accumulatedSteps > expectedSteps) {
            console.log('fail');
            return 
        }

        if (this.accumulatedSteps < expectedSteps) {
            console.log('continue');
            return 
        }

        this.currentStep++;
        this.accumulatedSteps = 0;

        if (this.currentStep === this.combo.length) {
            console.log('✅ Vault Unlocked!');
            return 'success';
        }

        return 'continue';
    }

}