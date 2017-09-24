import {Component, EventEmitter, Input, Output} from '@angular/core';
import {starCbk, starCbkSelected} from "../../data";
import {Checkbox, Email} from "../../interfaces";

@Component({
  selector: 'email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent{
  public starCbk: Checkbox = starCbk;
  public starCbkSelected: Checkbox = starCbk;
  @Input() item: Email;

  constructor() {
    this.starCbk = starCbk;
    this.starCbkSelected = starCbkSelected;
  }

  isToday() {
    const today: Date = new Date();
    const itemDate = new Date(this.item.time);
    return today.getDay() === itemDate.getDay() &&
        today.getMonth() === itemDate.getMonth() &&
        today.getFullYear() === itemDate.getFullYear();
  }
}
