/**
 * Created by anate on 14/09/2017.
 */
import {Injectable} from "@angular/core";
import {MailFolder} from "../interfaces";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()

export class NavigationService {
  public state = new BehaviorSubject<MailFolder>(null);

  public setState(newState: MailFolder) {
    this.state.next(newState);
  }
}
