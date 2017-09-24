import {Component, Input} from '@angular/core';
import {UserInfo} from "../interfaces";

@Component({
  selector: 'profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.scss']
})
export class ProfileBoxComponent{
  @Input() userInfo: UserInfo;
}
