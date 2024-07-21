import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { NgFor } from '@angular/common';
import { TwowaybindingComponent } from "./twowaybinding/twowaybinding.component";
import { ParentComponent } from "./ViewChild/parent/parent.component";
import { ContentComponent } from "./Ng-content/content/content.component";
import { PipesComponent } from "./pipes/pipes/pipes.component";
import { ProductListComponent } from "./pipes/product-list/product-list.component";
import { ObservableComponent } from "./Observable-Rxjs/observable/observable.component";
import { KeyloggerComponent } from "./Observable-Rxjs/keylogger/keylogger.component";
import { Ch08ProductListComponent } from "./Rest-api/products/ch08-product-list/ch08-product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ItemComponent, 
    NgFor, 
    TwowaybindingComponent, 
    ParentComponent, 
    ContentComponent, 
    PipesComponent, 
    ProductListComponent, 
    ObservableComponent, 
    KeyloggerComponent, 
    Ch08ProductListComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: string[] = ['hieu', 'vuong', 'dinh', 'Vuong', 'Dinh'];

  addNewItem(val: string) {
    if(val !== '') {
      this.items.push(val);
    }
  }
}
