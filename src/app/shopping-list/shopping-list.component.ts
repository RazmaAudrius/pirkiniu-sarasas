import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListStorageService } from '../shopping-list-storage.service';

@Component({
  standalone: true,
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  imports: [CommonModule]
})
export class ShoppingListComponent {
  sarasas: { preke: string, kiekis: number }[] = [];

  constructor(private shoppingListStorageService: ShoppingListStorageService)
  {
    this.sarasas = this.shoppingListStorageService.sarasas;
  }


  istrintiPreke(index: number) {
    this.shoppingListStorageService.istrintiPreke(index);   
  }

  istrintiVisaSarasa() {
    this.shoppingListStorageService.istrintiSarasa();    
  }
}
