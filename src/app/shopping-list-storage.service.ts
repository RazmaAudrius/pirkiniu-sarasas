import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListStorageService {
  private readonly storageKey = 'pirkiniuSarasas';
  public sarasas: Array<{ preke: string, kiekis: number }> = [];
  constructor() {
    let tmp = localStorage.getItem(this.storageKey);
    if (tmp != null) {
      this.sarasas = JSON.parse(tmp);
    }
  }

  issaugotiSarasa(sarasas: { preke: string, kiekis: number }[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(sarasas));
  }

  pridetiPreke(preke: { preke: string, kiekis: number }) {
    this.sarasas.push(preke);
    this.issaugotiSarasa(this.sarasas);
  }

  istrintiPreke(index: number) {
    this.sarasas.splice(index, 1);
    this.issaugotiSarasa(this.sarasas);
  }

  istrintiSarasa() {
    this.sarasas = [];
    this.issaugotiSarasa(this.sarasas);
  }
}
