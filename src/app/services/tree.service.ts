import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  constructor() {}

  jsonToTree(json: any) {
    console.log(json);
    const node = { name: 'Schema', children: [] };
    let children = [];
    Object.keys(json).map((key) => {
      if (typeof json[key] !== 'object') {
        children.push({ name: json[key] });
      } else {
        if (json.properties) {
          this.jsonToTree(json.properties);
        }
        if (json.issualDate) {
          this.jsonToTree(json.issualDate);
        }
      }
    });
    node.children = children;
    return node;
  }
}
