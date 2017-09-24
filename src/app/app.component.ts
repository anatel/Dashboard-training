import {Component, Input} from '@angular/core';
import {Summary} from "./interfaces";
import {SUMMARIES} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  summaries: Summary[];
  isMenuOpen = true;
  constructor() {
    this.summaries = SUMMARIES;
  }
}

