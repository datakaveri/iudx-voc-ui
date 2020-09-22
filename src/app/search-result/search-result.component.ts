import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchDetail: any;
  term: any;
  _url: string = environment.BASE_URL;
  error: boolean = false;
  results: boolean = true;
  constructor( private route: ActivatedRoute,private router:Router,
    private service: InterceptorService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.term = params.q;
      this.searchTerm(this.term);
    });
  }
  searchTerm(value: string) {
    this.service.get_api_headers('fuzzysearch?q='+value).then((resp)=>{
      // console.log(resp);
      this.searchDetail =resp;

      if (this.searchDetail.length == 0) {
        this.error = true;
        this.results = false;
      } else {
        this.results = true;
        this.error = false;
      }
    });
  }
  goToLabel(label:string){
    if (label[0] === label[0].toUpperCase()){
      this.router.navigate(['/type',label])
    }
    else{
      this.router.navigate(['/properties',label])
    }
  }
}
