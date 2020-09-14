import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: string;
  searchTerm: string;
  constructor(private router: Router,private service:InterceptorService) { }

  ngOnInit(): void {
  }
  goToDataModels(){
    this.router.navigate(['/data-models/list']);
  }
  goToEntities(){
    this.router.navigate(['/entities/list']);
  }
  onSearch(text: string) {
    console.log(text);
    console.log(this.searchTerm);
    this.router.navigate(['/search/searchTerm'], {
      queryParams: { q: this.searchTerm },
    });
  }
}
