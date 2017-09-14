/**
 * Created by anate on 14/09/2017.
 */
import {Injectable} from "@angular/core";
import {MailFolder} from "../interfaces";
import {Subject} from "rxjs/Subject";
@Injectable()

export class NavigationService {
  public state = new Subject<MailFolder>();

  public setState(newState: MailFolder) {
    this.state.next(newState);
  }
}
