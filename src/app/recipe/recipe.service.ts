import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Ultimate Decker Burger','Try with French Fries','https://images.unsplash.com/photo-1521845455419-eac340fdbbed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12acc444640618124fe9aedfaad19ed7&auto=format&fit=crop&w=666&q=80',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Meat Patty', 1),
        new Ingredient('Cheese', 5)

      ]),
    new Recipe('Pepperoni Pizza','Nothing can beat a pizza','https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=750&q=80',
      [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Pepperoni', 10),
        new Ingredient('Cheese', 5)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  setRecipes(recipe: Recipe[]){
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  onAddIngredientToShoppingList(ingredient: Ingredient[]){
      this.slService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
