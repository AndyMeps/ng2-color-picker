import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { ColorPickerComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        ColorPickerComponent
     ],
    exports: [
        ColorPickerComponent
    ]
})
export class ColorPickerModule {
    public static forRoot(options: any = {}, module: string = 'default') {
        return {
            ngModule: ColorPickerModule
        }
    }
 }
