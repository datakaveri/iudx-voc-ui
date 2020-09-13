import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-schema-details-types',
  templateUrl: './schema-details-types.component.html',
  styleUrls: ['./schema-details-types.component.scss'],
})
export class SchemaDetailsTypesComponent implements OnInit {
  className: any;
  value: any;
  parsed_response: any;
  breadcrumbs: Array<string>;
  res: any;
  examples: boolean;
  label: string;
  code: any;
  jsonQuery: string;
  tabs: any;
  content:any;
  num: any;
  constructor(
    private route: ActivatedRoute,
    private service: InterceptorService,private router:Router
  ) {
    this.parsed_response = {};
    this.res = {};
    // this.className = this.route.snapshot.params.class_name;
    this.breadcrumbs = [];
    this.examples = false;
    this.label = 'Example';
    this.tabs = false;
  }

  ngOnInit(): void {
    this.showClassDetail();
  }
  showClassDetail() {
    this.route.params.subscribe((params)=>{
      this.className = params['class_name'];
    
    this.service.get_api_headersLD(this.className).then((data) => {
      // console.log(data);
      this.res = data['@graph'];

      if (this.res.length == 1) {
        this.parsed_response = {
          label: this.res[0]['rdfs:label'],
          description: this.res[0]['rdfs:comment'],
        };
      } else {
        this.parsed_response = {
          description: this.res[0]['rdfs:comment'],
          breadcrumbs: [
            this.res[0]['@id'].split('iudx:')[1],
            this.res[0]['rdfs:subClassOf']['@id'].split('iudx:')[1],
          ],
          tables: {},
        };
        this.get_sub_class(this.res, this.res[0]['rdfs:subClassOf']['@id']);
        this.get_sub_tables(this.res);
        this.breadcrumbs = this.parsed_response.breadcrumbs.reverse();
      }
    });
    this.showExamples(this.className);
  });
}
  get_sub_class(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['@id'] == str) {
        if (arr[i]['rdfs:subClassOf']) {
          this.parsed_response.breadcrumbs.push(
            arr[i]['rdfs:subClassOf']['@id'].split('iudx:')[1]
          );
          this.get_sub_class(arr, arr[i]['rdfs:subClassOf']['@id']);
        }
        break;
      }
    }
  }

  get_sub_tables(arr) {
    this.parsed_response.breadcrumbs.forEach((b) => {
      this.parsed_response.tables[b] = [];
    });
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['iudx:domainIncludes']) {
        loop_inner: for (
          let j = 0;
          j < this.parsed_response.breadcrumbs.length;
          j++
        ) {
          if (this.is_includes(arr[i], this.parsed_response.breadcrumbs[j])) {
            let obj = {
              property: arr[i]['rdfs:label'],
              expected_types: arr[i]['iudx:rangeIncludes'].map((x) => {
                return x['@id'].split(':')[1];
              }),
              description: arr[i]['rdfs:comment'],
            };
            this.parsed_response.tables[
              this.parsed_response.breadcrumbs[j]
            ].push(obj);
            break loop_inner;
          }
        }
      }
    }
  }

  is_includes(obj, str) {
    let flag = false;
    obj['iudx:domainIncludes'].forEach((b) => {
      if (b['@id'] == 'iudx:' + str) flag = true;
    });
    return flag;
  }
  showExamples(val: string) {
    this.service.get_api_headersLD('examples/'+this.className).then((response :any) => {
      // console.log(response);
      if (response == [] || response.length == 0) {
        this.examples = false;
      } else {
        this.examples = true;
        this.code = response;
        // console.log(this.code)

      }
    });
  }
  getJson(example: Object) {
    // console.log(typeof example);
    this.jsonQuery =
      'https://json-ld.org/playground/#startTab=tab-expand&json-ld=' +
      encodeURIComponent(JSON.stringify(example));
  }
  copy(json) {
    const el = document.createElement('textarea');
    el.value = JSON.stringify(json);
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  selectTab(tab: any,num){
  this.content = tab;
  // tab.active = true;
  this.tabs = true;
}
}
