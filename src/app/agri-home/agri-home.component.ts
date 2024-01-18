import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-agri-home',
  templateUrl: './agri-home.component.html',
  styleUrls: ['./agri-home.component.scss'],
})
export class AgriHomeComponent implements OnInit {
  model: string;
  searchTerm: string;
  filteredTerm: any = [];
  results: any;
  pageHeight: any;
  theme: string;

  constructor(private router: Router, private service: InterceptorService) {
    this.pageHeight = window.innerHeight;
    this.searchTerm = '';
    this.theme = localStorage.getItem('theme');
  }

  ngOnInit(): void {}
  goToDataModels() {
    this.router.navigate(['/data-models/list']);
  }

  goToEntities() {
    this.router.navigate(['/entities/list']);
  }

  onSearch(text: string) {
    this.router.navigate(['/search/searchTerm'], {
      queryParams: { q: this.searchTerm },
    });
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

  scrollToAbout() {
    window.scrollBy(0, this.pageHeight);
  }

  scrollToConsist() {
    window.scrollBy(0, this.pageHeight * 2);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
