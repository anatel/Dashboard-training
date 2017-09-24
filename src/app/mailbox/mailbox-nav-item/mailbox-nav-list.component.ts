import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MailFolder, MailFolderType} from "../../interfaces";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'mailbox-nav-list',
  templateUrl: './mailbox-nav-list.component.html',
  styleUrls: ['./mailbox-nav-list.component.scss']
})
export class MailboxNavListComponent implements OnInit {
  @Input() items: MailFolder[];
  @Input() selectedItem: MailFolder;

  constructor(private navSrv: NavigationService) {}

  ngOnInit() {
    this.navSrv.state.subscribe((state) => {
      this.selectedItem = state;
    });
  }

  isMailBox(item) {
    return item.type === MailFolderType.MailBox;
  }

  selectItem(item, event) {
    event.stopPropagation();
    this.navSrv.setState(item);
    if (item.type === MailFolderType.Folder && item.children && item.children.length > 0) {
      item.isExpanded = !item.isExpanded;
    }

    console.log(item);
  }
}

