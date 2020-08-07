import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('Tasty Pasta Recipe',
               'Pasta',
               'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
               [
                 new Ingredient('Pasta', 1),
                 new Ingredient('Tomato Sauce', 2),
                 new Ingredient('Meatballs', 4)
               ]),
    new Recipe('Tasty Burger Recipe',
               'Burger',
               'https://asset.slimmingworld.co.uk/content/media/11975/ultimate-slimming-world-burger2_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=640&height=640',
               [
                 new Ingredient('Buns', 2),
                 new Ingredient('Meat', 2)
               ])
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
