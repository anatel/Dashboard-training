import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserInfo} from "../interfaces";
import {CURR_USER} from "../data";

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class SiteHeaderComponent {
  userInfo: UserInfo;
  @Input() isMenuOpen;
  @Output() isMenuOpenChange = new EventEmitter<boolean>();
  constructor() {
    this.userInfo = CURR_USER;
  }
}
