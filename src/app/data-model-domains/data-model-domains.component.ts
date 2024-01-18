import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-model-domains',
  templateUrl: './data-model-domains.component.html',
  styleUrls: ['./data-model-domains.component.scss'],
})
export class DataModelDomainsComponent implements OnInit {
  dataModels: any;
  descriptors: any;
  theme: string;
  constructor(private service: InterceptorService, private router: Router) {
    this.theme = localStorage.getItem('theme');
  }

  ngOnInit(): void {
    this.getAllDomains();
  }
  getAllDomains() {
    this.service
      .get_api_headers('relationship?rel=subClassOf&val=DataModel')
      .then((data: any) => {
        this.dataModels = data.sort((a, b) => (a.label > b.label ? 1 : -1));
      });
  }
  getDataModelsList(domain_name) {
    this.router.navigate(['/domain', domain_name]);
  }
  showDescriptorList() {
    this.router.navigate(['/data-descriptors/list']);
  }
  lowerCaseConversion(domain: any) {
    let domainName = '';
    switch (domain) {
      case 'Urban Mobility':
        domainName = 'urban';
        break;
      case 'Waste Management':
        domainName = 'waste';
        break;
      case 'Street Light':
        domainName = 'street';
        break;
      case 'Video Systems':
        domainName = 'video-systems';
        break;
      case 'Work Place':
        domainName = 'work';
        break;
      default:
        domainName = domain.toLowerCase();
    }
    return domainName;
  }
}
