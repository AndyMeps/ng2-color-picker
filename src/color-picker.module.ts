import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'ng2-bootstrap';

import { ColorPickerComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule.forRoot()
    ],
    declarations: [
        ColorPickerComponent
     ],
    exports: [
        ColorPickerComponent
    ]
})
export class ColorPickerModule { }
