import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  services: Service[];
  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getServicesList().subscribe((services: Service[]) => {
      this.services = services;
    });
  }

}
