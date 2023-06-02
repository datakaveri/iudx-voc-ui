import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHeader: boolean = false;

  constructor(private title: Title, private router: Router) {
    if (localStorage.getItem('theme') === 'adex') {
      this.title.setTitle('ADEX | Vocubalry');
    }
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
