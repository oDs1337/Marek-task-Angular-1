import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  @Output() nameChanged = new EventEmitter<string>()

  nazwajakas = Object.freeze({
    a:'b',
  })

  name:string = '';
  currentDate:string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentDate = this.fetchCurrentData();
  }

  fetchCurrentData(){
    const today = new Date();
    return today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() + 'r.';
  }

  changeName(value: string){
    this.nameChanged.emit(value);
    this.name = value;
  }

}
