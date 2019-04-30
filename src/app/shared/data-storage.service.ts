import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map } from 'rxjs/internal/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DatatorageService{

  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {

  }

  storeRecipe(){
    const token = this.authService.getToken();
    return this.http.put('https://recipe-book-3994c.firebaseio.com/recipe.json?auth='+token,this.recipeService.getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-3994c.firebaseio.com/recipe.json?auth=' + token)
      .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }


}
