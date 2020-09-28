import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descriptor-details',
  templateUrl: './descriptor-details.component.html',
  styleUrls: ['./descriptor-details.component.scss'],
})
export class DescriptorDetailsComponent implements OnInit {
  resource: any;
  data_descriptor: any;
  descriptor_name: string;
  flags: Array<Boolean>;
  constructor(
    private service: InterceptorService,
    private route: ActivatedRoute
  ) {
    this.flags = [];
    this.descriptor_name = this.route.snapshot.params.descriptor_name;
  }

  ngOnInit(): void {
    this.getDescriptors();
  }
  getDescriptors() {
    this.service
      .get_api_headersLD('descriptor/' + this.descriptor_name)
      .then((res) => {
        this.manipulate_data_descriptor(res);
      });
  }
  manipulate_data_descriptor(obj) {
    let arr = [];
    let keys = Object.keys(obj);
    keys.forEach((a, i) => {
      if (typeof obj[a] == 'object') {
        let o = { key: a, ...obj[a] };
        arr.push(o);
      }
    });
    this.data_descriptor = arr;
    this.flags.length = this.data_descriptor.length;
    this.data_descriptor.forEach((a, i) => {
      this.data_descriptor[i] = this.convert_obj_array_of_objs(a);
      this.flags[i] = false;
    });
  }

  convert_obj_array_of_objs(obj) {
    let keys = Object.keys(obj);
    let arr = [];
    keys.forEach((a, i) => {
      if (a != 'type') {
        let data;
        if (typeof obj[a] == 'string') {
          data = {
            key: a,
            value: obj[a].includes(':') ? obj[a].split(':')[1] : obj[a],
          };
        } else if (typeof obj[a] == 'number') {
          data = {
            key: a,
            value: obj[a],
            level: 1,
          };
        } else if (typeof obj[a] == 'object') {
          data = {
            key: a,
            value: this.convert_obj_array_of_objs(obj[a]),
          };
        }
        arr.push(data);
      }
    });
    return arr;
  }

  typeOf(value) {
    return typeof value;
  }

  toggle(i) {
    this.flags[i] = !this.flags[i];
  }
}
