import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SubscriberService } from './subscriber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dk-voc-ui';
  showHeader: boolean = false;
  popup_status: any;
  popup_type: any;

  constructor(private router: Router, private subscriber: SubscriberService) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });

    this.popup_status = false;
    this.popup_type = '';

    this.subscriber.get_popup().subscribe((data) => {
      this.popup_status = data.flag;
      this.popup_type = data.type;
    });
  }
}
