import { Component, Input, Output, EventEmitter, OnInit, Self } from '@angular/core';
import { NgModel, ControlValueAccessor } from '@angular/forms';

import { IColorPickerConfiguration, ColorPickerConfiguration } from '../models';

@Component({
    selector: `color-picker[ngModel]`,
    template: `
        <div class="color-picker-container" dropdown>
            <span class="current-color" [style.width]="config.width + 'px'" [style.height]="config.height + 'px'"
                [style.border-radius]="config.borderRadius + 'px'" [style.background-color]="cd.viewModel" dropdownToggle>
            </span>
            <ul dropdownMenu class="color-picker-dropdown">
                <li class="color-picker-color" *ngFor="let color of config.availableColors" [style.width]="config.width + 'px'" [style.height]="config.height + 'px'"
                    [style.border-radius]="config.borderRadius + 'px'" [style.background-color]="color" (click)="setColor(color)" [title]="color">
                </li>
            </ul>
        </div>
    `,
    styles: [
        `.color-picker-container {
            display: inline-block; }`,

        `.current-color {
            display: inline-block;
            background-color: #ff0000;
            cursor: pointer; }`,

        `.color-picker-color {
            display: inline-block;
            margin-left: 4px;
            cursor: pointer; }`,

        `.color-picker-dropdown {
            padding-bottom: 0;
        }`
    ],
    providers: [ NgModel ]
})
export class ColorPickerComponent implements ControlValueAccessor, OnInit {

    @Input('picker-config') opts: IColorPickerConfiguration;

    public cd: NgModel;

    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    public config: ColorPickerConfiguration;

    constructor(@Self() cd: NgModel) {
        this.cd = cd;
        cd.valueAccessor = this;

        this.config = new ColorPickerConfiguration();
    }

    ngOnInit() {
        this._processOptions();
    }

    public writeValue(value: any): void {

    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }

    public setColor(color: string) {
        this.cd.viewToModelUpdate(color);
    }

    private _processOptions() {
        if (this.opts != null) {

            // availableColors
            if (this.opts.availableColors) {
                this.config.availableColors = this.opts.availableColors;
            }

            // width
            if (this.opts.width) {
                this.config.width = this.opts.width;
            }

            // height
            if (this.opts.height) {
                this.config.height = this.opts.height;
            }

            // borderRadius
            if (this.opts.borderRadius) {
                this.config.borderRadius = this.opts.borderRadius;
            }
        }
    }

}