import { IColorPickerConfiguration } from '../interfaces';

export class ColorPickerConfiguration implements IColorPickerConfiguration {
    public width: number;
    public height: number;
    public borderRadius: number;

    constructor() {
        this.width = 25;
        this.height = 25;
        this.borderRadius = 4;
    }
}
