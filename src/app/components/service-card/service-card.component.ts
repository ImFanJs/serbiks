import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
