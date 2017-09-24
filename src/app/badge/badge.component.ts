import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() value: string;
  @Input() color: string;
  @Input() size: string;
}
