import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute,
    private service: InterceptorService
  ) {
    this.parsed_response = {};
    this.res = {};
    this.className = this.route.snapshot.params.class_name;
    this.breadcrumbs = [];
  }

  ngOnInit(): void {
    this.showClassDetail();
  }
  showClassDetail() {
    this.service.get_api_headersLD(this.className).then((data) => {
      let response = data['@graph'];
      this.res = data['@graph'];
      if (response.length == 1) {
        this.parsed_response = {
          description: response[0]['rdfs:comment'],
        };
      } else {
        this.parsed_response = {
          description: response[0]['rdfs:comment'],
          breadcrumbs: [
            response[0]['@id'].split('iudx:')[1],
            response[0]['rdfs:subClassOf']['@id'].split('iudx:')[1],
          ],
          tables: {},
        };
        this.get_sub_class(response, response[0]['rdfs:subClassOf']['@id']);
        this.get_sub_tables(response);
        this.breadcrumbs = this.parsed_response.breadcrumbs.reverse();
      }
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
}
