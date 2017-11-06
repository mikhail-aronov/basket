import { Component } from '@angular/core';

import { GroceryListItem } from '../grocery-list-item';
import { GroceryListService } from '../grocery-list.service';

@Component({
  selector: 'app-basket-header',
  templateUrl: './basket-header.component.html',
  styleUrls: ['./basket-header.component.scss', '../../assets/css/components.scss']
})
export class BasketHeaderComponent {

  constructor(private groceryListService: GroceryListService){}
    newItem: GroceryListItem = new GroceryListItem();

    decrementQuantity(){ this.newItem.quantity--; }
    incrementQuantity(){ this.newItem.quantity++; }
  
    addToList(){ 
      this.groceryListService.addToList(this.newItem);
      this.newItem = new GroceryListItem(); 
    }
    
    toggleShowListItemsInBasket(){
      this.groceryListService.toggleShowListItemsInBasket();
    }


}
