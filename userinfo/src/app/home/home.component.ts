import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  welcomeLbls=GlobalConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
