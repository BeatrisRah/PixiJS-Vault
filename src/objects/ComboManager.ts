import type { Direction } from "../types/directionType";
export class ComboManager {
    combo: [number, Direction][];
    currentStep: number;
    input: [number, Direction][];

    constructor() {
        this.combo = []
        this.currentStep = 0
        this.input = []
        this.generateCombo()
    }

    generateCombo() {
        this.combo = Array.from({ length: 3 }, () => [
            Math.floor(Math.random() * 9) + 1,
            Math.random() > 0.5 ? 'clockwise' : 'counterclockwise',
        ]);
        this.input = [];
        this.currentStep = 0;
        console.log('Secret combination:', this.combo.map(([n, d]) => `${n} ${d}`).join(', '));
    }

    checkCombo(steps: number, dir: Direction) {
        const [expectedSteps, expectedDir] = this.combo[this.currentStep];

        if (steps === expectedSteps && dir === expectedDir) {
            this.currentStep++;
            if (this.currentStep === this.combo.length) {
                console.log('Unlock Vault');

            }
        } else {
            console.log('Reset Vault');
        }
    }

}