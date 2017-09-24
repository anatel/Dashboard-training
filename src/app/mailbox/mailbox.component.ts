import {Component} from '@angular/core';
import {Checkbox, Email, MailFolder, PaginationData, UserInfo} from "../interfaces";
import {INBOX_USER, MAIL_FOLDERS} from "../data";
import {MenuItem} from "primeng/primeng";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent {
  public mailFolders: MailFolder[]; // can be mailbox or folder.
  public userInfo: UserInfo;
  public selectedFolder: MailFolder;
  public starCbk: Checkbox;
  public starCbkSelected: Checkbox;
  public markOptions: MenuItem[];
  public checkAll: boolean;
  public currEmailList: Email[];
  public paginationData: PaginationData = {
    itemsPerPage: 10,
    firstIndex: 0
  };

  constructor(private navSrv: NavigationService) {
    this.mailFolders = MAIL_FOLDERS;
    this.userInfo = INBOX_USER;

    this.initFolders();
    this.managePagination();
    this.checkAll = false;

    this.markOptions = [
      {label: 'Read', command: this.markEmails},
      {label: 'Unread', command: this.markEmails}
    ];

    this.navSrv.state.subscribe( (state) => {
      this.changeFolder(state);
    });
  }

  public managePagination(paginationData?: PaginationData) {
    if (paginationData) {
      this.paginationData = paginationData;
    }
    this.currEmailList = this.folderMails.slice(this.paginationData.firstIndex, this.paginationData.itemsPerPage + this.paginationData.firstIndex);
  }

  private initFolders() {
    this.changeFolder(this.mailFolders[0]);
    this.mailFolders.forEach((folder) => {
      if (folder.blocked) {
        folder['styleClass'] = 'hide';
      }
    });
    this.initImportantFolder();
  }

  private initImportantFolder() {
    const importantFolder = this.mailFolders.find(item => item.label === 'Important');
    importantFolder.emails = this.getImportantMails(this.mailFolders);
  }

  private getImportantMails(folders: MailFolder[]) {
    let result = [];
    folders.forEach((folder) =>  {
      if (folder.label !== 'Important') {
        if (folder.children) {
          result = result.concat(this.getImportantMails(folder.children));
        }
        result = result.concat(folder.emails.filter((email) => email.favorite));
      }
    });

    return result;
  }

  changeFolder(folder: MailFolder) {
    // debugger;
    if (folder !== this.selectedFolder) {
      folder['selectable'] = false;
      const currFolder = this.selectedFolder;
      if (currFolder && !currFolder.blocked) {
        currFolder['selectable'] = true;
      }

      this.selectedFolder = folder;
      this.paginationData.firstIndex = 0;
      if (folder.label === 'Important') {
        this.initImportantFolder();
      }
      this.managePagination();
    }
  }

  toggleMailsSelection(checked: boolean) {
    this.currEmailList.forEach((email) => {
      email.selected = checked;
    });
  }

  markEmails = (event) => {
    this.selectedMails.forEach((email) => {
      email.read = event.item.label === 'Read';
      email.selected = false;
    });
    this.checkAll = false;
  }

  moveMailsToFolder(event) {
    // push all mails to the target folder
    event.node.emails = event.node.emails.concat(this.selectedMails);
    const selectedMailsSaver = this.selectedMails;
    // remove all of them from the selected folder
    this.folderMails = this.folderMails.filter((folder) => !folder.selected);

    // deselect them
    selectedMailsSaver.forEach((email) => {
      email.selected = false;
    });

    this.checkAll = false;
  }

  public addToFav(item: Email) {
    console.log('add to fav');
      const i = this.mailFolders.findIndex((folder) => folder.label.toLowerCase() === 'important');
      this.mailFolders[i].emails.push(item);
  }

  get selectedMails() {
    return this.folderMails.filter((email) => email.selected);
  }

  get folderMails() {
    return this.selectedFolder.emails.sort((email1, email2) => {
      return (new Date(email1.time).getTime() - new Date(email2.time).getTime());
    });
  }

  set folderMails(val: Email[]) {
    this.selectedFolder.emails = val;
    this.managePagination();
  }
}
