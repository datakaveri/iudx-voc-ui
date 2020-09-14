import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  route_value: any;

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      let route_value = params.id;
      if(route_value[0] === route_value[0].toUpperCase()) 
      this.router.navigate(['/type',route_value]);
      else 
      this.router.navigate(['/properties',route_value]);
    })
  }
}
