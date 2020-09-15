import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  model: string;
  filteredTerm: any = [];
  results: any;
  
  private _searchTerm: string;
 
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
  }

  constructor(private router: Router,private service:InterceptorService) {}

  ngOnInit(): void {
  }
  onSearch(text: string) {
    this.router.navigate(['/search/searchTerm'], {
      queryParams: { q: this._searchTerm },
    });
  }
  filterItems(value) {
    this.service.get_api_headers('fuzzysearch?q='+value).then((resp)=>{
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
}
