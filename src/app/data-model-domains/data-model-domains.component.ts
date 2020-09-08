import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-model-domains',
  templateUrl: './data-model-domains.component.html',
  styleUrls: ['./data-model-domains.component.scss']
})
export class DataModelDomainsComponent implements OnInit {
  dataModels:any;
  descriptors: any;
  constructor(private service:InterceptorService,private router: Router) {}

  ngOnInit(): void {
    this.getAllDomains();
  }
  getAllDomains(){
    this.service.get_api_headers('relationship?rel=subClassOf&val=DataModel').then((data)=>{
      this.dataModels = data;
    })
  }
  getDataModelsList(domain_name){
    this.router.navigate(['/domain',domain_name]);
  }
  showDescriptorList(){
    this.router.navigate(['/data-descriptors']);
  }

}
