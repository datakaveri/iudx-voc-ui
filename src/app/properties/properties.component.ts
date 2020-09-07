import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties: any;

  constructor(private service: InterceptorService) { 
    this.getPropertyList();
  }

  ngOnInit(): void {
  }
  getPropertyList(){
    this.service.get_api_headers('properties').then((data)=>{
      console.log(data);
      this.properties = data;
    })
  }
}
