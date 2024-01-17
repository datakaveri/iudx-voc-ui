import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
})
export class EntitiesComponent implements OnInit {
  entities: any;
  theme: string;

  constructor(
    private backendService: InterceptorService,
    private router: Router
  ) {
    this.theme = localStorage.getItem('theme');
  }
  ngOnInit(): void {
    this.getEntities();
  }
  displayTypesList() {
    this.router.navigate(['types/list']);
  }
  displayPropertyList() {
    this.router.navigate(['properties/list']);
  }
  getEntities(): void {
    if (localStorage.getItem('theme') !== 'adex') {
      this.backendService
        .get_api_headers('relationship?rel=subClassOf&val=IUDXEntity')
        .then((data:any) => {
          this.entities =  data.sort((a,b)=>a.label>b.label? 1:-1);
        });
    } else {
      this.backendService
        .get_api_headers('relationship?rel=subClassOf&val=ADEXEntity')
        .then((data :any) => {
          this.entities =  data.sort((a,b)=>a.label>b.label? 1:-1);
        });
    }
  }
  goToEntity(entity_name: string) {
    this.router.navigate(['/', entity_name]);
  }
}
