import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-data-descriptors',
  templateUrl: './data-descriptors.component.html',
  styleUrls: ['./data-descriptors.component.scss']
})
export class DataDescriptorsComponent implements OnInit {
  descriptors: any;
  // parsed_response: { };

  constructor(private service:InterceptorService) { }

  ngOnInit(): void {
    this.showAllDataDescriptors();
  }
  
  showAllDataDescriptors(){
  this.service.get_api_headers('list/descriptors').then((data:any)=>{
    this.descriptors =[];
      data.forEach((a)=>{
        if(a.type != "iudx:DataDescriptor"){
         this.descriptors.push({
          type: a.type.split('iudx:')[1],
          documents: a.documents,
          })
        }
      });
    });
  }
}
