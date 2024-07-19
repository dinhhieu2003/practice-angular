import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({required: true}) items: string[] = [];
  @Output() addItemEvent = new EventEmitter<string>();

  addNewItem(item: string) {
    this.addItemEvent.emit(item);
  }
}
