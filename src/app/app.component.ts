import { Component } from '@angular/core';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ShoppingFormComponent, ShoppingListComponent]
})
export class AppComponent { }
