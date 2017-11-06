import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceryListService } from './grocery-list.service';
import { BasketHeaderComponent } from './basket-header/basket-header.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketHeaderComponent,
    GroceryListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GroceryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
