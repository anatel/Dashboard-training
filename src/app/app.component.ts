import {Component} from '@angular/core';
import {Summary} from "./interfaces";
import {SUMMARIES} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  summaries: Summary[];
  private menuOpen: boolean;
  private activityMinimized: boolean;
  private mailboxMinimized: boolean;

  constructor() {
    this.summaries = SUMMARIES;

    if (localStorage.isMenuOpen === undefined) {
      localStorage.isMenuOpen = true;
    }

    if (localStorage.isActivityBoxMinimized === undefined) {
      localStorage.isActivityBoxMinimized = false;
    }

    if (localStorage.isMailboxMinimized === undefined) {
      localStorage.isMailboxMinimized = false;
    }

    this.isMenuOpen = localStorage.isMenuOpen === 'true';
    this.isActivityBoxMinimized = localStorage.isActivityBoxMinimized === 'true';
    this.isMailboxMinimized = localStorage.isMailboxMinimized === 'true';
  }

  get isMenuOpen() {
    return this.menuOpen;
  }

  set isMenuOpen(value: boolean) {
    this.menuOpen = value;
    localStorage.isMenuOpen = value;
  }

  get isActivityBoxMinimized() {
    return this.activityMinimized;
  }

  set isActivityBoxMinimized(value: boolean) {
    this.activityMinimized = value;
    localStorage.isActivityBoxMinimized = value;
  }

  get isMailboxMinimized() {
    return this.mailboxMinimized;
  }

  set isMailboxMinimized(value: boolean) {
    this.mailboxMinimized = value;
    localStorage.isMailboxMinimized = value;
  }
}

