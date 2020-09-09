import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-schema-details-properties',
  templateUrl: './schema-details-properties.component.html',
  styleUrls: ['./schema-details-properties.component.scss']
})
export class SchemaDetailsPropertiesComponent implements OnInit {
  property_details :any;
  prName: '';
  constructor(private route:ActivatedRoute,private service:InterceptorService) {
    this.property_details = {};
    this.prName = this.route.snapshot.params.property_name;
   }

  ngOnInit(): void {
    this.showPropertyDetail();
  }
  showPropertyDetail(){
    this.service.get_api_headersLD(this.prName).then((data)=>{
      console.log(data['@graph']);
      let response = data['@graph'][0];
      this.property_details = {
        label: response['rdfs:label'],
        comment:response['rdfs:comment'],
        types:[],
        domains:[],
      }; 
      for(let range of response['iudx:rangeIncludes']){
        this.property_details.types.push(range['@id'].split(':')[1]);
      }
      for (let domain of response['iudx:domainIncludes']) {
        this.property_details.domains.push(domain['@id'].split(':')[1]);
      }
    })
  }
}
