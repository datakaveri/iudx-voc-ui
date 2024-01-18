import { Component, OnInit } from '@angular/core';
import { InterceptorService } from '../interceptor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss'],
})
export class DomainsComponent implements OnInit {
  domains: any;
  value: string;
  theme: string;
  constructor(
    private service: InterceptorService,
    private route: ActivatedRoute
  ) {
    this.theme = localStorage.getItem('theme');
  }

  ngOnInit(): void {
    this.getDomain();
  }
  getDomain() {
    this.route.params.subscribe((params) => {
      this.value = params['domain_name'];
    });
    this.service
      .get_api_headers('relationship?rel=subClassOf&val=' + this.value)
      .then((data: any) => {
        this.domains = data.sort((a, b) => (a.label > b.label ? 1 : -1));
      });
  }
}
