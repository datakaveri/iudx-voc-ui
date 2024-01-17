import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  classes: any;
  constructor(private service: InterceptorService, private router: Router) {
    this.getClassesList();
  }

  ngOnInit(): void {}
  getClassesList() {
    this.service.get_api_headers('classes').then((data :any) => {
      this.classes =  data.sort((a,b)=>a.label>b.label? 1:-1);
    });
  }
  showClassDetail(clsName: string) {
    this.router.navigate(['/' + clsName]);
  }
}
