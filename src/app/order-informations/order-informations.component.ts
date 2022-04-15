import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-informations',
  templateUrl: './order-informations.component.html',
  styleUrls: ['./order-informations.component.css']
})
export class OrderInformationsComponent implements OnInit {

  orderInformations =
    {
      street: '',
      apartmentNumber: '',
      postalCode: '',
      city: '',
      phoneNumber:'',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
