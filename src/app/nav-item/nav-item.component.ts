import {Component, Input} from '@angular/core';
import {NavItem} from "../interfaces";

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() navItem: NavItem;
}
