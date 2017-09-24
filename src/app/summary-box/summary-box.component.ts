import {Component, Input} from '@angular/core';
import {Summary} from "../interfaces";

@Component({
  selector: 'summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.scss']
})
export class SummaryBoxComponent {
  @Input() summary: Summary;
}

