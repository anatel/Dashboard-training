import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {NavItemComponent} from './nav-item/nav-item.component';
import {BadgeComponent} from './badge/badge.component';
import {SiteHeaderComponent} from './page-header/page-header.component';
import {ProfileBoxComponent} from './profile-box/profile-box.component';
import {BoxComponent} from './box/box.component';
import {SummaryBoxComponent} from './summary-box/summary-box.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {MailboxNavListComponent} from './mailbox/mailbox-nav-item/mailbox-nav-list.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {EmailItemComponent} from './mailbox/email-item/email-item.component';
import {FormsModule} from '@angular/forms';
import {SplitButtonModule, OverlayPanelModule, TreeModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NavItemComponent,
    BadgeComponent,
    SiteHeaderComponent,
    ProfileBoxComponent,
    BoxComponent,
    SummaryBoxComponent,
    MailboxComponent,
    MailboxNavListComponent,
    CheckboxComponent,
    EmailItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    OverlayPanelModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
