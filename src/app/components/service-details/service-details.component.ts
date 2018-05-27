import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Service } from '../../interfaces/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  id: number;
  service: Service = {id: null, name: '', company: '', price: null};

  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.servicesService.getService(this.id).subscribe((service: Service) => {
      this.service = service;
    });
  }

}
