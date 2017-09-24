import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent{
  @Input() title;
  @Input() minimized = false;
  @Output() minimizedChange = new EventEmitter<boolean>();
  isOpen = true;

}
