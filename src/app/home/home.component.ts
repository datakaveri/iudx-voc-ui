import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InterceptorService} from '../interceptor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: string;
  searchTerm: string;
  filteredTerm: any = [];
  results: any;
  pageHeight: any;

  constructor(private router: Router, private service: InterceptorService) {
    this.pageHeight = window.innerHeight;
  }

  ngOnInit(): void {

  }

  goToDataModels() {
    this.router.navigate(['/data-models/list']);
  }

  goToEntities() {
    this.router.navigate(['/entities/list']);
  }

  onSearch(text: string) {
    this.router.navigate(['/search/searchTerm'], {
      queryParams: {q: this.searchTerm},
    });
  }

  filterItems(value) {
    this.service.get_api_headers('fuzzysearch?q=' + value).then((resp) => {
      console.log(resp);
      this.results = resp;
      let str = value.toLowerCase();
      console.log(str);
      console.log(this.filteredTerm)
      this.filteredTerm = this.results.filter((e) => {
        return e.label.toLowerCase().includes(str);
      });
    });
  }

  scrollToAbout() {
    window.scrollBy(0, this.pageHeight);
  }

  scrollToConsist() {
    window.scrollBy( 0, this.pageHeight * 2);
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }
}
