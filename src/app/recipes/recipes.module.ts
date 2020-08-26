import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestInputComponent } from './test-input/test-input.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    TestInputComponent
  ],
  imports:
  [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ]
})
export class RecipesModule {

}
