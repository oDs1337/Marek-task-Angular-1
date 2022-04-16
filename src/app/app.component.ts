import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = '';
}
