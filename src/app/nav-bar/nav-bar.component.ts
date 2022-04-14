import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  name:string = 'Marek';
  currentDate:string = '';

  fetchCurrentData(){
    const today = new Date();
    return today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() + 'r.';
  }

  constructor() { }

  ngOnInit(): void {
    this.currentDate = this.fetchCurrentData();
  }

}
