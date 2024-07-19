import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  item: string = '';

  items = ['First Item', 'Second Item', 'Third Items'];

  addNewItem() {
    this.items.push(this.item);
  }
}
