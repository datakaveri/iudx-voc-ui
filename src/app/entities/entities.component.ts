import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  displayTypesList(){
    this.router.navigate(['types']);
  }
  displayPropertyList(){
    this.router.navigate(['properties']);
  }
}
