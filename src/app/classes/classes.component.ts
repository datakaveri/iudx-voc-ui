import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes : any;
  constructor(private service: InterceptorService) { 
    this.getClassesList();
  }

  ngOnInit(): void {
   
  }
  getClassesList(){
    this.service.get_api_headers('classes').then((data)=>{
      console.log(data);
      this.classes = data;
    })
    
  }
}
