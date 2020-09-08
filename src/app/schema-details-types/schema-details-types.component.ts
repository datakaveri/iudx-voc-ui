import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schema-details-types',
  templateUrl: './schema-details-types.component.html',
  styleUrls: ['./schema-details-types.component.scss']
})
export class SchemaDetailsTypesComponent implements OnInit {
  className: any;

  constructor( private route: ActivatedRoute,
  private service :InterceptorService) {
      // this.className = this.route.snapshot.params.class_name;
      // console.log(this.className)
     }

  ngOnInit(): void {
    this.showClassDetail()
  }
  showClassDetail(){
    this.service.get_api_headersLD('ResourceServer').then((data)=>{
      console.log(JSON.stringify(data['@graph']));
      let table_arr = [], temp_arr = [];
      data['@graph'].forEach((a,i)=>{
        if(a['iudx:domainIncludes']) {
          let flag = false;
          a['iudx:domainIncludes'].forEach(b=>{
              if(b['@id'] == 'iudx:ResourceServer') flag = true;
          });
          if(flag) temp_arr.push({
              property: a['rdfs:label'],
              expected_types: a['iudx:rangeIncludes'].map(x=>{ return x['@id'].split(':')[1] }),
              description: a['rdfs:comment']
          });
        } else {
          if(temp_arr.length > 0) {
            table_arr.push(temp_arr);
            temp_arr = [];
          }
        }
        if(i == (data['@graph'].length - 1)) table_arr.push(temp_arr);
      });
      console.log(JSON.stringify(table_arr));
    })
  }

}
