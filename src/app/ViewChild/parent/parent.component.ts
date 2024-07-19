import { Component, computed, effect, Signal, viewChild, ViewChild } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  listComponent = viewChild.required<ListItemComponent>('list');
  total: Signal<number> = computed(() => this.listComponent().items.length);
  constructor() {
    effect(() => {
      console.log(this.listComponent()?.items);
    });
  }

  getTotal() {
    this.total = computed(() => this.listComponent().items.length);
    return this.total();
  }

}
