import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  filteredTerm: any = [];
  results: any;
  search_text: string;
  theme: string;
  constructor(private router: Router, private service: InterceptorService) {
    this.theme = localStorage.getItem('theme');
  }

  ngOnInit(): void {}

  close_div() {
    this.search_text = '';
  }
  onSearch(text: string) {
    this.router.navigate(['/search/searchTerm'], {
      queryParams: { q: this.search_text },
    });
    this.close_div();
  }

  filterItems(value) {
    this.service.get_api_headers('fuzzysearch?q=' + value).then((resp) => {
      this.results = resp;
      let str = value.toLowerCase();
      this.filteredTerm = this.results.filter((e) => {
        return e.label.toLowerCase().includes(str);
      });
    });
  }

  scrollToDiv(target: HTMLElement) {
    // Scroll to the target element smoothly
    target.scrollIntoView();
  }
}
