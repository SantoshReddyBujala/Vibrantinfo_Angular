import { Component } from '@angular/core';
import { GlobalConstants } from './common/global-constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  homeCompLabels = GlobalConstants;
}
