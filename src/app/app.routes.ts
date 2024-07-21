import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ContentComponent } from './Ng-content/content/content.component';
import { KeyloggerComponent } from './Observable-Rxjs/keylogger/keylogger.component';
import { ParentComponent } from './ViewChild/parent/parent.component';
import { Ch08ProductListComponent } from './Rest-api/products/ch08-product-list/ch08-product-list.component';
import { ResultComponent } from './Ng-content/result/result.component';

export const routes: Routes = [
    {
        path: "item",
        component: ItemComponent
    },

    {
        path: "twowaybinding",
        component: TwowaybindingComponent
    },
    
    {
        path: "ng-content",
        component: ResultComponent
    },

    {
        path: "rxjs",
        component: KeyloggerComponent,
    },

    {
        path: "viewChild",
        component: ParentComponent,
    },

    {
        path: "rest",
        component: Ch08ProductListComponent,
    },
];
