import { Component } from '@angular/core';
import { GroceryListItem } from './grocery-list-item';
import { GroceryListService } from './grocery-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private groceryListService: GroceryListService){}

  get groceryList(){ return this.groceryListService.getList(); }
}
