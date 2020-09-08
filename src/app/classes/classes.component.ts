import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes : any;
  displayClassDetail: boolean;
  constructor(private service: InterceptorService,private route:Router) { 
    this.getClassesList();
    this.displayClassDetail = false;
  }

  ngOnInit(): void {
   
  }
  getClassesList(){
    this.service.get_api_headers('classes').then((data)=>{
      // console.log(data);
      this.classes = data;
    })
  }
  showClassDetail(clsName :string){
    console.log(clsName)
    this.displayClassDetail = true;
    
    document.getElementById('class-section').style.display = 'none';
    // this.route.navigate(['/',clsName]);
  }
}
