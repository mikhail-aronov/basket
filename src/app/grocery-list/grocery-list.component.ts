import { Component } from '@angular/core';
import { GroceryListItem } from '../grocery-list-item';
import { GroceryListService } from '../grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss', '../../assets/css/components.scss']
})
export class GroceryListComponent {

  selectedItem: GroceryListItem = new GroceryListItem();

  constructor(private groceryListService: GroceryListService){}

    selectItem(item){
      this.selectedItem.name = item.name;
      this.selectedItem.quantity = item.quantity;
      this.selectedItem.inBasket = item.quantity;
    }

    decrementQuantity(){ this.selectedItem.inBasket--; }
    incrementQuantity(){ this.selectedItem.inBasket++; }

    addToBasket(item){  
      this.groceryListService.addToBasket(this.selectedItem.name, this.selectedItem.inBasket);
    }

    hasItemsInGroceryList(): boolean{
      return this.groceryListService.hasItemsInGroceryList();
    }

    showItemsAddedToBasket(): boolean{
      return this.groceryListService.showItemsAddedToBasket;
    }

    get groceryList(){ return this.groceryListService.getList(); }

}
