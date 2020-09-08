import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss'],
})
export class DomainsComponent implements OnInit {
  domains: any;
  constructor(private service: InterceptorService) {
    // this.getDomainsList();
  }

  ngOnInit(): void {}
}
