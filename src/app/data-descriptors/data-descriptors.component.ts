import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-data-descriptors',
  templateUrl: './data-descriptors.component.html',
  styleUrls: ['./data-descriptors.component.scss']
})
export class DataDescriptorsComponent implements OnInit {
  descriptors: any;

  constructor(private service:InterceptorService) { }

  ngOnInit(): void {
    this.showAllDataDescriptors();
  }
  
  showAllDataDescriptors(){
  this.service.get_api_headers('list/descriptors').then((data)=>{
    this.descriptors = data;
  })
}
}
