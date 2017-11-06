import { Component } from '@angular/core';
import { GroceryListItem } from '../grocery-list-item';
import { GroceryListService } from '../grocery-list.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss', '../../assets/css/components.scss']
})
export class BasketComponent {

  selectedItem: GroceryListItem = new GroceryListItem();
  
    constructor(private groceryListService: GroceryListService){}
  
    selectItem(item){
      this.selectedItem.name = item.name;
      this.selectedItem.quantity = item.quantity;
      this.selectedItem.inBasket = item.inBasket;
    }

    decrementQuantity(){ this.selectedItem.inBasket--; }
    incrementQuantity(){ this.selectedItem.inBasket++; }

    removeFromBasket(item){  
      this.groceryListService.removeFromBasket(this.selectedItem.name, this.selectedItem.inBasket);
    }

  get itemsInBasket(){ return this.groceryListService.getItemsInBasket(); }
}
