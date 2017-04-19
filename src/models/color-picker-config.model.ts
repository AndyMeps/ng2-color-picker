import { IColorPickerConfiguration } from '../interfaces';

export const DEFAULT_COLORS = [
    '#ff0000',
    '#00ff00',
    '#0000ff'
];

export class ColorPickerConfiguration implements IColorPickerConfiguration {
    public width: number;
    public height: number;
    public borderRadius: number;

    constructor() {
        this.width = 25;
        this.height = 25;
        this.borderRadius = 4;
        this.availableColors = DEFAULT_COLORS;
    }

    /**
     * Deprecated in v1.2.1
     * @deprecated in v1.2.1
     */
    public availableColors: string[];
}