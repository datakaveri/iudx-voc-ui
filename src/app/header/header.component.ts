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
  // searchRes:any;
  // control = new FormControl();
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
    // console.log(text);
    // console.log(this._searchTerm);
    this.router.navigate(['/search/searchTerm'], {
      queryParams: { q: this._searchTerm },
    });
  }
}
