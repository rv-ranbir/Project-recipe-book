import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipe/recipe.service';
import { DatatorageService } from './shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipe/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RecipesModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, DatatorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
