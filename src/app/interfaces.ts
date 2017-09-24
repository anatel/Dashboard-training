/**
 * Created by anate on 13/08/2017.
 */
export interface NavGroup {
  label: string;
  navItems: NavItem[];
  isExpanded?: boolean;
}

export interface NavItem {
  label: string;
  link: string;
  icon: string;
  unhandledItemsCount?: number;
}

export interface UserInfo {
  image: string;
  email?: string;
  fullName: string;
  position?: string;
  notificationCount?: number;
  friendRequestsCount?: number;
}

export interface Summary {
  icon: string;
  amount: string;
  type: string;
  color?: string;
}


export interface Email {
  from: string;
  read: boolean;
  favorite: boolean;
  subject: string;
  time: Date;
  selected?: boolean;
}

// export type MailItems = Array<MailFolder | Email>;
export enum MailFolderType {MailBox, Folder}

export interface MailFolder {
  label: string;
  icon?: string;
  badgeColor?: string;
  unreadCount?: number;
  // items: MailItems; // Mail folder can  be Inbox for example, or a folder like "Chats" that contains mails and other folders.
  type: MailFolderType;
  children?: MailFolder[];
  emails: Email[];
  isExpanded?: boolean;
  blocked?: boolean; // Allowed to move folders manually into it?
}

export interface Checkbox {
  checkedImg: string;
  uncheckedImg: string;
  width: string;
  height: string;
}

export interface PaginationData {
  itemsPerPage: number;
  firstIndex: number;
}
