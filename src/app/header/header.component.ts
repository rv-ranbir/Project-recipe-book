import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DatatorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DatatorageService,
              private authService: AuthService) { }

  onSaveData() {
    this.dataStorageService.storeRecipe().subscribe(
      ( response: Response ) => {
        console.log( response );
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logoutUser();
  }

}
