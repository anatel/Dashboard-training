import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxNavItemComponent } from './mailbox-nav-list.component';

describe('MailboxNavItemComponent', () => {
  let component: MailboxNavItemComponent;
  let fixture: ComponentFixture<MailboxNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
