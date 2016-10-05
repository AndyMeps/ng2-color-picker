import { Component } from '@angular/core';

import { IColorPickerConfiguration } from 'ng2-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: any;

  public config: IColorPickerConfiguration;

  constructor() {
    this.model = '#cccccc';
    this.config = {
      width: 25,
      height: 25,
      borderRadius: 4,
      availableColors: [
        '#33cccc',
        '#99cc99',
        '#cc99cc',
        '#fabf8f',
        '#bfbfbf',
        '#6699ff',
        '#ff6666',
        '#ffcc66'
      ]
    };
  }

  public change(val: any) {
    console.log(val);
  }
}
