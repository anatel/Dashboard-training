import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavGroup, NavItem, UserInfo} from "../interfaces";
import {CURR_USER, NAV_GROUPS} from "../data";
import {isBoolean} from "util";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  navGroups: NavGroup[];
  selectedItem: NavItem;
  currUser: UserInfo;
  @Input() isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor() {
    this.navGroups = NAV_GROUPS;
    this.selectedItem = this.navGroups[0].navItems[0];
    this.currUser = CURR_USER;
  }

  selectItem(item: NavItem) {
    this.selectedItem = item;
  }
}
