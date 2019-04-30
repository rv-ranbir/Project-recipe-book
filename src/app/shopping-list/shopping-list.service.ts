import {Ingredient} from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potatoes',5),
    new Ingredient('Tomatoes',7)
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  getIngredients(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}
