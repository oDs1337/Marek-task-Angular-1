import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { OrderInformationsComponent } from './order-informations/order-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IngredientsComponent,
    OrderInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
