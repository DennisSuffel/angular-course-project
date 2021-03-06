import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient): void {
    this.addIngredients([newIngredient]);
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(newIngredients);
    // this.ingredients.push(...newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
