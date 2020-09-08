import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-data-model-domains',
  templateUrl: './data-model-domains.component.html',
  styleUrls: ['./data-model-domains.component.scss']
})
export class DataModelDomainsComponent implements OnInit {
  dataModels:any;
  constructor(private service:InterceptorService) {}

  ngOnInit(): void {
    this.getAllDataModelsDomain();
  }
  getAllDataModelsDomain(){
    this.service.get_api_headers('relationship?rel=subClassOf&val=DataModel').then((data)=>{
      console.log(data);
      this.dataModels =data;
    })
  }

}
