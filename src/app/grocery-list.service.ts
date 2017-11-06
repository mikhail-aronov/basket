import { Injectable } from '@angular/core';
import { GroceryListItem } from './grocery-list-item';

@Injectable()
export class GroceryListService {

  groceryList: GroceryListItem[] = [];
  showItemsAddedToBasket: boolean = false;

    addToBasket(name: string, quantity: number): GroceryListService{      
      let item = this.groceryList.find(x => x.name == name);
      item.inBasket += quantity;
      item.quantity -= quantity;
      return this;
    }

    removeFromBasket(name: string, quantity: number): GroceryListService{
      let item = this.groceryList.find(x => x.name == name);
      item.inBasket -= quantity;
      item.quantity += quantity;
      return this;
    }

    addToList(item: GroceryListItem): GroceryListService{
      this.groceryList.push(item);
      return this;
    }

    getList(): GroceryListItem[]{
       return this.groceryList;
    }

    getItemsInBasket(): GroceryListItem[]{
      return this.groceryList.filter(x => x.inBasket > 0);
    }

    hasItemsInGroceryList(): boolean {
      return this.showItemsAddedToBasket ? this.groceryList.length > 0 : this.groceryList.filter(x => x.quantity > 0).length > 0;
    }

    toggleShowListItemsInBasket() : boolean{
      this.showItemsAddedToBasket = !this.showItemsAddedToBasket;
      return this.showItemsAddedToBasket;
    }

  constructor() { }

}
