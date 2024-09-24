import { Component } from '@angular/core';
import {  NgModel, FormsModule } from '@angular/forms';
import { ShoppingListStorageService } from '../shopping-list-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ShoppingFormComponent {
  naujaPreke = { preke: '', kiekis: 1 };

  constructor(private shoppingListStorageService: ShoppingListStorageService) { }

  pridetiPreke() {
    if (this.naujaPreke.preke && this.naujaPreke.kiekis > 0) {
      this.shoppingListStorageService.pridetiPreke({ ...this.naujaPreke });
      this.naujaPreke = { preke: '', kiekis: 1 };
    }
  }
}
