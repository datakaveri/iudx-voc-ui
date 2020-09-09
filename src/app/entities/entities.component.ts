import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  entities: any;

  constructor(private backendService: InterceptorService,private router:Router) { }

  ngOnInit(): void {
    this.getEntities();
  }
  displayTypesList(){
    this.router.navigate(['types']);
  }
  displayPropertyList(){
    this.router.navigate(['properties']);
  }
  getEntities(): void {
    this.backendService.get_api_headers('relationship?rel=subClassOf&val=IUDXEntity').then((data)=>{
      this.entities = data
    });
  }
  goToEntity(entity_name:string){
    this.router.navigate(['/type',entity_name]);
  }
}