import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  popup_subject = new Subject<any>();

  constructor() {}

  set_popup(flag: boolean, type: string, isChanged?: boolean): void {
		this.popup_subject.next({ flag, type, isChanged });
	}

	get_popup(): Observable<any> {
		return this.popup_subject.asObservable();
	}
}
